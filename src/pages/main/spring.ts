export interface SpreadType {
  name: string;
  symptom: string;
  route: string;
  precaution: string[];
}
export interface SeasonType {
  spread: SpreadType[];
  preventive: string[];
}

let spring: SeasonType[] = [
  {
    spread: [
      {
        name: '홍역', //이름
        symptom: '고열, 발진, 기침, 콧물, 눈물, 눈의 충혈', //증상
        route: '비말 등의 공기매개감염, 환자의 비.인두 분비물과 직접 접촉', //감염경로
        precaution: [
          '생후12 ~ 15개월, 만4 ~ 6세에 접종 약독화생균백신 접종',
          '환자와 접촉한지 5일이내에 면역글로불린을 접종하면 임상증상을 가볍게 할 수 있다.',
        ], //예방법
      },
      {
        name: '유행성이하선염(볼거리)',
        symptom: '침샘에 염증, 부종, 탈수, 씹거나 삼킬 때 통증',
        route: '비말등의 공기매개 감염, 환자의 타액과 직접접촉',
        precaution: [
          '생후12 ~ 15개월, 만4 ~ 6세에 접종 MMR 백신 접종',
          '임신한 부인에게는 투여하지 않는다.',
        ],
      },
      {
        name: '풍진',
        symptom: '두통, 결막염, 발진 등',
        route: '비인두 분비액의 비말(공기)이나 직접 접촉',
        precaution: [
          '생후12 ~ 15개월, 만4 ~ 6세에 약독화생균백신 접종',
          '백신은 살아 있는 바이러스인 까닭에 열이 있는 환자, 면역기능이 저하된 환자에게는 사용하지 말고 임신부에게도 사용하지 않도록 하며 예방접종을 실시한 여성은 3개월 동안은 임신하지 않도록 한다.',
        ],
      },
      {
        name: '수두',
        symptom: '발진, 가려움, 수포 등',
        route: '수포액의 직접접촉이나 공기를 통한 전파',
        precaution: ['생후12 ~ 15개월에 예방 접종'],
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