export interface SpreadType {
  name: string;
  symptom: string;
  route: string;
}
export interface SeasonType {
  spread: SpreadType[];
  preventive: string[];
}

let spring: SeasonType[] = [
  {
    spread: [
      {
        name: '홍역',
        symptom: '고열, 발진, 기침, 콧물, 눈물, 눈의 충혈',
        route: '비말 등의 공기매개감염, 환자의 비.인두 분비물과 직접 접촉',
      },
      {
        name: '유행성이하선염(볼거리)',
        symptom: '침샘에 염증, 부종, 탈수, 씹거나 삼킬 때 통증',
        route: '비말등의 공기매개 감염, 환자의 타액과 직접접촉',
      },
      {
        name: '풍진',
        symptom: '두통, 결막염, 발진 등',
        route: '비인두 분비액의 비말(공기)이나 직접 접촉',
      },
      {
        name: '수두',
        symptom: '발진, 가려움, 수포 등',
        route: '수포액의 직접접촉이나 공기를 통한 전파',
      },
    ],
    preventive: [
      '사람이 많이 모이거나 밀폐된 곳을 피한다.',
      '외출후 바로 손씻기, 양치질을 한다.',
      '예방접종 대상 질병은 접종을 실시한다.',
    ],
  },
];

export default spring;
