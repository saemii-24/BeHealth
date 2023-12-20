import React, { useState, useEffect, useContext } from 'react';
import { FaWeight } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { MdBloodtype } from 'react-icons/md';
import { MdMale, MdFemale } from 'react-icons/md';
import { MoodType, moodArr } from './MyPageData.ts';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';
import { AuthContext } from '../../context/AuthContext.tsx';
import { MyStatusContext, MyStatusContextType } from '../../context/MyStatusContext.tsx';
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
} from 'firebase/firestore';
import { db, app } from '../../firebase/firebaseApp';
import { getAuth, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

//실제 렌더링 될 값이 담길 변수
export interface RenderDataType {
  birth?: string;
  bloodType?: string;
  gender?: string;
  height?: number;
  weight?: number;
  mood?: { emoji: string; moodText: string };
  name?: string;
  userId?: string;
}

const MyStatus = () => {
  const [mood, setMood] = useState<MoodType>(moodArr[0]);
  const [showMoodBox, setShowMoodBox] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
  const [addInfo, setAddInfo] = useState<boolean>(false);

  //최초 정보 등록
  const context = useContext(AuthContext);
  const auth = getAuth(app);

  //setState
  const { setData } = useContext(MyStatusContext);

  //input value값이 담길 변수
  const [myName, setMyName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bloodType, setBloodType] = useState<string>('');
  const [myId, setMyId] = useState<string>(''); //컬렉션의 객체 아이디를 저장한다.

  const [renderData, setRenderData] = useState<RenderDataType>({});
  //나이 계산
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    if (renderData.birth) {
      const myBirthYear = new Date(renderData.birth).getFullYear();
      const myBirthMonth = new Date(renderData.birth).getMonth() + 1;
      const myBirthDate = new Date(renderData.birth).getDate() + 1;
      const thisYear = new Date().getFullYear();
      const thisMonth = new Date().getMonth() + 1;
      const thisDate = new Date().getDate();

      if (Number(myBirthMonth + '' + myBirthDate) > Number(thisMonth + '' + thisDate)) {
        if (thisYear - myBirthYear - 1 < 0) {
          setAge(0);
        } else {
          setAge(thisYear - myBirthYear - 1);
        }
      } else {
        setAge(thisYear - myBirthYear);
      }
    }
  }, [renderData]);

  const fetchData = async () => {
    if (context.user) {
      const q = query(
        collection(db, 'myStatus'),
        where('userId', '==', context.user!.uid),
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setAddInfo(true);
        querySnapshot.forEach((doc) => {
          setMyId(doc.id);
          setRenderData(doc.data());
          setData!(doc.data());
        });
      } else {
        setAddInfo(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [context]);

  const { data }: MyStatusContextType = useContext(MyStatusContext);

  useEffect(() => {
    onCheckValue();
  }, [popup]);

  const onCheckValue = () => {
    if (data) {
      if (!myName) {
        setMyName(data.name!);
      }
      if (!birth) {
        setBirth(data.birth!);
      }
      if (!gender) {
        setGender(data.gender!);
      }
      if (!height) {
        setHeight(data.height!);
      }
      if (!weight) {
        setWeight(data.weight!);
      }
      if (!bloodType) {
        setBloodType(data.bloodType!);
      }
    }
  };

  const onSubmit = async (e) => {
    onCheckValue();
    e.preventDefault();
    //userData를 조회한다.
    await fetchData();
    if (addInfo) {
      //만약 정보가 있다면 수정한다.
      try {
        const myStatusRef = doc(db, 'myStatus', myId);
        await updateDoc(myStatusRef, {
          name: myName,
          birth: birth,
          gender: gender,
          height: height,
          weight: weight,
          bloodType: bloodType,
          userId: context.user!.uid,
          mood: mood,
        });

        updateProfile(auth.currentUser!, {
          displayName: myName,
        });
        await fetchData();
        setPopup(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await addDoc(collection(db, 'myStatus'), {
          name: myName,
          birth: birth,
          gender: gender,
          height: height,
          weight: weight,
          bloodType: bloodType,
          userId: context.user!.uid,
          mood: mood,
        });
        updateProfile(auth.currentUser!, {
          displayName: myName,
        });
        await fetchData();
        setPopup(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setMyName(value);
    }
    if (name === 'birth') {
      setBirth(value);
    }
    if (name === 'gender') {
      setGender(value);
    }
    if (name === 'height') {
      setHeight(value);
    }
    if (name === 'weight') {
      setWeight(value);
    }
    if (name === 'blood-type') {
      setBloodType(value);
    }
  };
  return (
    <div className='my-status-box'>
      {context.user ? (
        <>
          <div className='my-status'>
            <p
              className='my-status__modify modify'
              onClick={() => {
                setPopup(true);
              }}>
              수정
            </p>
            <div
              className='my-status__mood'
              onClick={() => {
                setShowMoodBox(!showMoodBox);
              }}>
              {showMoodBox && (
                <div className='my-status__mood__select-box'>
                  {moodArr.map((mood, index) => {
                    return (
                      <div key={mood.moodText}>
                        <p className='a11y-hidden'>{mood.moodText}</p>
                        <h3
                          onClick={() => {
                            setMood(moodArr[index]);
                          }}>
                          {mood.emoji}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              )}
              <p className='a11y-hidden'>{mood.moodText}</p>
              <h3>{mood.emoji}</h3>
            </div>
            <div className='my-status__middle'>
              <h1 className='my-status__name'>
                {renderData.name ? renderData.name : '사용자'}
              </h1>
              <h3 className='my-status__birth'>
                {renderData.birth ? renderData.birth : ' - '}
              </h3>
              <h3 className='my-status__age'>{age}years</h3>
              <h3 className='my-status__gender'>
                {renderData.gender === 'male' ? (
                  <MdMale className='my-status__gender--male' />
                ) : (
                  <MdFemale className='my-status__gender--female' />
                )}
              </h3>
            </div>
            <div className='my-status__bottom'>
              <div className='my-status__height'>
                <FaPerson />
                <h5>키</h5>
                <h3>{renderData.height}cm</h3>
              </div>
              <div className='my-status__weight'>
                <FaWeight />
                <h5>몸무게</h5>
                <h3>{renderData.weight}kg</h3>
              </div>
              <div className='my-status__blood'>
                <MdBloodtype />
                <h5>혈액형</h5>
                <h3>{renderData.bloodType ? renderData.bloodType : '-'}</h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='my-status'>
            <div className='my-status__mood my-status__mood-logo'>
              <p className='a11y-hidden'>Be health</p>
              <svg
                width='20'
                height='18'
                viewBox='0 0 20 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.9468 1.61721C12.1031 -0.53907 15.5991 -0.539072 17.7554 1.61721C19.272 3.13381 19.7219 5.31317 19.1051 7.223H11.6238C11.3248 7.223 11.0544 7.40063 10.9356 7.67504L10.3356 9.06105L8.72482 4.59608C8.62046 4.3068 8.35007 4.11053 8.04269 4.10095C7.73531 4.09137 7.45322 4.27041 7.33105 4.55263L6.17505 7.223H0.26747C-0.349303 5.31317 0.10061 3.13382 1.61721 1.61721C3.7735 -0.539069 7.26952 -0.539068 9.4258 1.61722L9.6863 1.87771L9.9468 1.61721ZM1.02183 8.723C1.19761 8.96943 1.39607 9.20467 1.61721 9.42581L9.68609 17.4947L9.68631 17.4945L9.68652 17.4947L17.7554 9.4258C17.9765 9.20466 18.175 8.96943 18.3508 8.723H12.1164L10.9604 11.3934C10.8382 11.6756 10.5562 11.8546 10.2488 11.845C9.94139 11.8355 9.67101 11.6392 9.56665 11.3499L7.95591 6.88495L7.35591 8.27095C7.23711 8.54537 6.96666 8.723 6.66763 8.723H1.02183Z'
                  fill='#306de5'
                />
              </svg>
            </div>
            <div className='my-status__middle'>
              <h1 className='my-status__name'>
                <Link to='/login'>로그인 해주세요</Link>
              </h1>
              <p className='my-status__welcome'>
                <Link to='/signup'>Be health에 처음이신가요?</Link>
              </p>
            </div>
          </div>
        </>
      )}
      <div className={cn('my-status__popup', { active: popup })}>
        <div
          className='my-status__popup__close'
          onClick={() => {
            setPopup(false);
          }}>
          <IoClose />
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='name'>이름</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={onChange}
              defaultValue={renderData.name ? renderData.name : ''}
            />
          </div>
          <div>
            <label htmlFor='birth'>생일</label>
            <input
              type='date'
              id='birth'
              name='birth'
              onChange={onChange}
              defaultValue={renderData.birth ? renderData.birth : ''}
            />
          </div>
          <div className='gender__radio'>
            <p>성별</p>
            <label htmlFor='gender--male'>남성</label>
            <input
              type='radio'
              id='gender--male'
              name='gender'
              value='male'
              onChange={onChange}
              checked={gender === 'male'}
            />
            <label htmlFor='gender--female' className='gender--female'>
              여성
            </label>
            <input
              type='radio'
              id='gender--female'
              name='gender'
              value='female'
              onChange={onChange}
              checked={gender === 'female'}
            />
          </div>
          <div>
            <label htmlFor='height'>키</label>
            <input
              type='number'
              name='height'
              id='height'
              min={0}
              onChange={onChange}
              defaultValue={renderData.height && renderData.height}
            />
            <span>cm</span>
          </div>
          <div>
            <label htmlFor='weight' defaultValue={45}>
              몸무게
            </label>
            <input
              type='number'
              name='weight'
              id='weight'
              min={0}
              onChange={onChange}
              defaultValue={renderData.weight && renderData.weight}
            />
            <span>kg</span>
          </div>
          <div>
            <label htmlFor='blood-type'>혈액형</label>

            <select
              name='blood-type'
              id='blood-type'
              onChange={onChange}
              value={bloodType}>
              <option value='-'>혈액형 선택</option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='AB'>AB</option>
              <option value='O'>O</option>
              <option value='그 외'>그 외</option>
            </select>
          </div>
          <div className='button__box'>
            <button className='button--submit' type='submit'>
              등록완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyStatus;
