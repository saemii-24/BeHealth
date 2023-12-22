import { FaChildren } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { IoHome } from 'react-icons/io5';
import { MdElderly } from 'react-icons/md';
export interface CategoryType {
  category: string;
  explain: string[];
  icon: React.FC;
}

let exerciseCategory: CategoryType[] = [
  {
    category: '어린이',
    explain: [
      '같은 나이라고 할지라도 성장 속도에 차이가 있기 때문에 주의해야 합니다. 중요한 것은 매일 규칙적으로 운동하는 것 입니다.',
      '어린이들은 부모님과 함께하면 지루함을 적게 느낀다고 합니다. 자녀와 유대감을 높일 수 있는 운동으로 건강과 성장을 챙길 수 있습니다.',
    ],
    icon: FaChildren,
  },
  {
    category: '직장인',
    explain: [
      '운동 할 시간을 내는 것이 쉽지 않지만, 출근 혹은 퇴근 시간 그리고 점심시간이나 쉬는 시간 등을 활용하여 운동하는 것이 필요합니다.',
      '어깨와 목 스트레칭 등 틈틈이 몸을 움직여주면 피로감을 덜 느낄 수 있습니다.',
    ],
    icon: HiBuildingOffice2,
  },
  {
    category: '주부',
    explain: [
      '가사 노동 외에 달리 운동을 하지 않는다면 신체적인 불균형을 야기해 요통이나 빈혈, 어깨 결림을 유발하기도 합니다.',
      '중년 주부는 보통 뼈나 혈관이 약해져 있기 때문에 격한 운동은 좋지 않습니다. 적당한 강도의 유산소 운동이 도움이 됩니다.',
      '주의할 것은 단기간에 욕심을 내는 것이 아니라, 주 3~5회 20~30분 정도 꾸준히 조금씩 운동해야 한다는 점입니다.',
    ],
    icon: IoHome,
  },
  {
    category: '어르신',
    explain: [
      '운동 경력, 병력, 환경, 선호도 등이 다르므로 개별적으로 운동 프로그램을 하는 이용하는 것이 좋습니다.',
      '그러나 보편적으로는 한 번에 장시간 운동이 아닌 조금씩 꾸준한 운동, 부담 없이 오래 움직이는 운동, 몸 상태에 맞는 운동 그리고 스트레칭을 하는 것이 필요합니다.',
      '반드시 응급처치를 받을 수 있게 조성된 환경에서 운동하는 것이 중요합니다.',
    ],
    icon: MdElderly,
  },
];

export default exerciseCategory;
