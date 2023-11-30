export interface MoodType {
  moodText: string;
  emoji: string;
}

export const moodArr: MoodType[] = [
  {
    moodText: '기분: 아주 좋음',
    emoji: '😊',
  },
  {
    moodText: '기분: 좋음',
    emoji: '🙂',
  },
  {
    moodText: '기분: 보통',
    emoji: '😐',
  },
  {
    moodText: '기분: 좋지 않음',
    emoji: '🙁',
  },
  {
    moodText: '기분: 슬픔',
    emoji: '😭',
  },
  {
    moodText: '기분: 분노',
    emoji: '😡',
  },
];
