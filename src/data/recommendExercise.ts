import { IoBicycleSharp } from 'react-icons/io5';
import { FaWalking, FaSwimmer } from 'react-icons/fa';
import { FaPersonRunning, FaPersonWalking } from 'react-icons/fa6';
import { GrYoga } from 'react-icons/gr';
import { PiMountainsFill } from 'react-icons/pi';
import { GiJumpingRope } from 'react-icons/gi';
import { IoIosBicycle } from 'react-icons/io';

export interface ExerciseType {
  name: string;
  minute: string;
  icon: React.FC;
}
export interface RecommendType {
  age: string;
  exercise: ExerciseType[];
  explain: string[];
}

let recommendExercise: RecommendType[] = [
  {
    age: '10대',
    exercise: [
      {
        name: '줄넘기',
        minute: '주 3~4회',
        icon: GiJumpingRope,
      },
      {
        name: '자전거',
        minute: '주 3~4회',
        icon: IoIosBicycle,
      },
      {
        name: '수영',
        minute: '주 3~4회',
        icon: FaSwimmer,
      },
    ],
    explain: [
      '성장에 도움이 될 수 있도록, 매일 꾸준하게 운동을 하는 것이 좋다.',
      '피로가 누적되지 않도록 중간 정도의 운동 강도가 권장된다.',
      '큰 움직임을 필요로 하는 활동적인 전신운동으로 신체에 활력을 불어넣으며 근육, 폐, 순환계 기능을 향상시키는 것이 좋다.',
    ],
  },
  {
    age: '20·30대',
    exercise: [
      {
        name: '달리기',
        minute: '30분',
        icon: FaPersonRunning,
      },
      {
        name: '수영',
        minute: '주 3회',
        icon: FaSwimmer,
      },
      {
        name: '사이클',
        minute: '주 3 ~ 5회',
        icon: IoBicycleSharp,
      },
    ],
    explain: [
      '청년기인 20·30대는 체력이 최고수준에서 점차 떨어지는 시기다. 가장 왕성한 사회활동이 지속되는 시기인 만큼, 운동할 수 있는 기회가 적어지고 업무와 스트레스에 시달리는 때이기도 하다.',
      '체력을 유지하는 노력이 가장 많이 요구되는데, 달리기와 자전거 타기, 수영등과 같은 유산소 운동이 도움이 된다.',
      '과체중이나 심장질환이 있는 사람의 경우 강도가 높은 조깅이나 자전거 타기 등은 인체에 충격을 줄 수 있기 떄문에 수영을 권장한다.',
    ],
  },
  {
    age: '40·50대',
    exercise: [
      {
        name: '수영',
        minute: '주 2회',
        icon: FaSwimmer,
      },
      {
        name: '등산',
        minute: '1시간 이상',
        icon: PiMountainsFill,
      },
      {
        name: '걷기',
        minute: '주 3~5회',
        icon: FaPersonWalking,
      },
    ],
    explain: [
      '중년기인 40·50대는 그동안 체력관리를 미뤄왔던 사람들에게 차츰 만성질환이 나타나는 시기다. 이 시기에 과도한 운동은 오히려 위험하므로 평소 운동능력에 따라 운동의 종류와 강도를 결정해야 한다.',
      '50대 이후에는 경쟁심을 유발하는 구기종목 등의 운동은 무리를 할 수 있기 때문에 피하는 것이 좋다.',
      '등산, 걷기 등의 유산소 운동을 주로 하되 가벼운 근력 운동을 병행할 수 있다.',
    ],
  },
  {
    age: '60대 이상',
    exercise: [
      {
        name: '산책',
        minute: '30 ~ 40분',
        icon: FaWalking,
      },
      {
        name: '맨손 체조',
        minute: '30분',
        icon: GrYoga,
      },
      {
        name: '실내 자전거',
        minute: '20분',
        icon: IoBicycleSharp,
      },
    ],
    explain: [
      '60대에 접어들면 안전을 우선해야 하므로 관절이나 뼈에 무리를 주는 운동은 피한다.',
      '운동을 시작하기 전 몸에 이상은 없는지 건강검진을 통해 점검한다.',
      '운동은 정신적인 스트레스가 적고 체중부하가 적은 운동이 권장된다.',
    ],
  },
];

export default recommendExercise;
