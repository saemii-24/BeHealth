import { IoBicycleSharp, IoMusicalNotesSharp } from "react-icons/io5";
import { FaBasketballBall, FaWalking, FaSwimmingPool } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { FaSwimmer } from "react-icons/fa";
import { PiMountainsFill, PiTennisBallFill } from "react-icons/pi";
import { GiGolfTee, GiJumpingRope } from "react-icons/gi";

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
        minute: '20 ~ 30분',
        icon: GiJumpingRope
      },
      {
        name: '농구',
        minute: '주 2회',
        icon: FaBasketballBall
      },
      {
        name: '테니스',
        minute: '주 3회',
        icon: PiTennisBallFill
      },
    ],
    explain: [
      '하루 20분 ~ 30분씩, 1주일에 3일 이상 조깅과 같은 근육 기능, 폐 기능, 순환계 기능을 향상시킬 수 있는 활동적인 전신 운동 위주의 에너지 소모가 큰 운동이 좋다.',
      '단, 비만인 경우 오히려 전신운동이 건강을 해칠 수도 있으므로, 가벼운 걷기 운동으로 비만을 먼저 조절한 후에 운동을 시작하는 것이 좋다.',
    ],
  },
  {
    age: '20대',
    exercise: [
      {
        name: '달리기',
        minute: '30분',
        icon: FaPersonRunning
      },
      {
        name: '수영',
        minute: '주 3회',
        icon: FaSwimmer
      },
      {
        name: '사이클',
        minute: '주 3 ~ 5회',
        icon: IoBicycleSharp
      },
    ],
    explain: [
      '신체가 인생의 정점에 달한 나이다. 이걸 당연히 여기고 운동을 게을리하는 시기이기도 하다.',
      '이 시절 운동으로 탄탄한 몸을 만드는 건 일종의 노후 대비 투자다.',
      '심박 수가 충분히 오르는 유산소 운동을 일주일에 3~5회 하면 좋다.',
    ],
  },
  {
    age: '30대',
    exercise: [
      {
        name: '요가',
        minute: '30분',
        icon: GrYoga
      },
      {
        name: '조깅',
        minute: '20 ~ 40분',
        icon: FaPersonRunning
      },
      {
        name: '에어로빅',
        minute: '주 3회',
        icon: IoMusicalNotesSharp
      },
    ],
    explain: [
      '30대에 어떤 운동을 어떻게 하느냐에 따라 중년의 건강 정도가 판가름 난다고 할 정도로 평생 건강을 위해 반드시 운동을 해야 하는 시기이다.',
      '이 시기 근력 운동은 노년기 골다공증과 관절염을 예방을 돕는다.',
      '유연성이 떨어지는 시기이므로 체력이 중상 수준이라 하더라도 운동 전후 준비 운동과 마무리 운동은 필수적이며, 충분한 스트레칭 등 유연성을 높이는 운동을 함께 해야 효과적이다.',
    ],
  },
  {
    age: '40대',
    exercise: [
      {
        name: '수영',
        minute: '주 2회',
        icon: FaSwimmer
      },
      {
        name: '등산',
        minute: '1시간 이상',
        icon: PiMountainsFill
      },
      {
        name: '골프',
        minute: '주 2회',
        icon: GiGolfTee
      },
    ],
    explain: [
      '40대 이전까지 어떤 식이습관과 운동습관으로 생활했느냐에 따라 건강 이상신호가 나타나기 시작하는 시기이므로, 재미 위주의 운동보다는 질병을 예방하고 치료할 수 있는 치료적 운동을 선택하는 것이 좋다.',
      '여성은 개인차가 있지만 40대~50대 초반 폐경과 함께 골다공증이 발생하기 쉬운 시기이므로 골절의 위험이 높은 운동은 피하고, 체중지지 운동을 늘리는 것이 좋다.',
    ],
  },
  {
    age: '50대',
    exercise: [
      {
        name: '걷기',
        minute: '30분',
        icon: FaWalking
      },
      {
        name: '스트레칭',
        minute: '10분 이상',
        icon: GrYoga
      },
      {
        name: '아쿠아 에어로빅',
        minute: '주 2 ~ 3회',
        icon: FaSwimmingPool
      },
    ],
    explain: [
      '심혈관계 질환의 발생률이 높아지므로 심장과 혈관을 강화할 수 있는 조깅, 자전거 타기와 같은 유산소 운동을 권한다.',
      '과격한 운동은 인체 면역계나 노화에 오히려 해가 될 수 있으므로 삼가는 것이 좋다.',
      '몸의 중심을 잡는 코어 근육과 엉덩이와 고관절에 유의해야 한다.',
    ],
  },
  {
    age: '60대 이상',
    exercise: [
      {
        name: '산책',
        minute: '30 ~ 40분',
        icon: FaWalking
      },
      {
        name: '맨손 체조',
        minute: '30분',
        icon: GrYoga
      },
      {
        name: '실내 자전거',
        minute: '20분',
        icon: IoBicycleSharp
      },
    ],
    explain: [
      '고혈압, 심장병 등 심혈관 질환이나 당뇨, 비만 등 평소 앓고 있는 질환이 있다면 운동을 시작하기 전에 전문의와 상의하여 몸 상태를 점검하고, 복용하는 약물이 있으면 약물이 운동에 미치는 영향 등도 고려해야 한다.',
      '근육과 뼈의 밀도가 떨어지는 시기이므로 운동할 때 무리하지 말고 균형감각과 유연성에 주의를 기울여 부상이 없도록 유의해야 한다.',
    ],
  },
];

export default recommendExercise;