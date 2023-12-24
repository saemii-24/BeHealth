import { PiMountainsFill } from 'react-icons/pi';
import { GiJumpingRope } from 'react-icons/gi';
import { IoBicycle, IoBaseball } from 'react-icons/io5';
import {
  FaWalking,
  FaRunning,
  FaSwimmer,
  FaSkiing,
  FaBowlingBall,
  FaBasketballBall,
  FaVolleyballBall,
} from 'react-icons/fa';
import { MdOutlineSportsTennis } from 'react-icons/md';
import { FaTableTennisPaddleBall } from 'react-icons/fa6';
import { TbPlayHandball } from 'react-icons/tb';

export interface ExerciseType {
  exerciseKey: number;
  exerciseName: string;
  calorie: number;
  icon: React.FC;
}

export const exerciseData: ExerciseType[] = [
  {
    exerciseKey: 1,
    exerciseName: '등산',
    calorie: 196,
    icon: PiMountainsFill,
  },
  {
    exerciseKey: 2,
    exerciseName: '줄넘기',
    calorie: 224,
    icon: GiJumpingRope,
  },
  {
    exerciseKey: 3,
    exerciseName: '자전거',
    calorie: 92,
    icon: IoBicycle,
  },
  {
    exerciseKey: 4,
    exerciseName: '천천히 걷기',
    calorie: 80,
    icon: FaWalking,
  },
  {
    exerciseKey: 5,
    exerciseName: '빠르게 걷기',
    calorie: 114,
    icon: FaRunning,
  },
  {
    exerciseKey: 6,
    exerciseName: '수영',
    calorie: 518,
    icon: FaSwimmer,
  },
  {
    exerciseKey: 7,
    exerciseName: '피구',
    calorie: 102,
    icon: TbPlayHandball,
  },
  {
    exerciseKey: 8,
    exerciseName: '스키',
    calorie: 186,
    icon: FaSkiing,
  },
  {
    exerciseKey: 9,
    exerciseName: '테니스',
    calorie: 176,
    icon: MdOutlineSportsTennis,
  },

  {
    exerciseKey: 10,
    exerciseName: '볼링',
    calorie: 90,
    icon: FaBowlingBall,
  },
  {
    exerciseKey: 11,
    exerciseName: '농구',
    calorie: 200,
    icon: FaBasketballBall,
  },
  {
    exerciseKey: 12,
    exerciseName: '배구',
    calorie: 200,
    icon: FaVolleyballBall,
  },
  {
    exerciseKey: 13,
    exerciseName: '탁구',
    calorie: 200,
    icon: FaTableTennisPaddleBall,
  },
  {
    exerciseKey: 14,
    exerciseName: '야구',
    calorie: 180,
    icon: IoBaseball,
  },
];
