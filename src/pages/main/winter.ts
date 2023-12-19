import { SeasonType } from './spring';

let winter: SeasonType[] = [
  {
    spread: [
      {
        name: '인플루엔자',
        symptom: '갑작스럽 발열, 오한, 두통, 기침, 인후통 등',
        route: '환자의 재채기나 기침을 통해 바이러스가 공기중에 퍼져 비말감염',
        precaution: [
          '매년 10~12월에 예방접종을 한다.',
          '기침, 재채기시 손수건이나 휴지 등으로 입을 가리는 예절 준수',
          '외출 후 손씻고 양치질 하기',
        ],
      },
      {
        name: '수막구균성 수막염',
        symptom: '인두염, 발열, 근육통, 패혈성 쇼크, 뇌막염',
        route: '비말감염이나 환자와 병원체 보유자의 호흡기 분비물과 직접 접촉으로 전파',
        precaution: [
          '개인위생을 철저히 지킨다.',
          '폐쇄 환경에 의한 밀집생활을 피한다(환경 조정 및 환기).',
        ],
      },
      {
        name: '공수병',
        symptom: '불안감, 발열, 두통, 전신 쇠약감, 불안, 부분적인 마비, 환청 등',
        route: '광견병에 걸린 동물이 사람을 물거나 할큄',
        precaution: [
          '애완동물에 대한 광견병 예방접종을 반드시 한다.',
          '야생동물과 사람, 애완동물의 직접적인 접촉 방지',
          '죽은 야생동물은 반드시 고무장갑을 착용하고 삽으로 비닐이나 플라스틱 용기에 넣어서 매장하고 삽은 살균제(락스 등)로 씻어야 하며 사체 주위는 소독 한다.',
        ],
      },
      {
        name: '로타바이러스 감염증',
        symptom: '겨울에서 봄까지 영유아에게서 중등도의 발열과 구토, 심한 설사를 일으킴',
        route: '대변에서 입으로의 감염이 주를 이룸',
        precaution: [
          '위생상태를 향상시켜 분변 - 경구전파를 예방',
          '모유영양을 함으로써 감염이 심하게 발현하는 것을 막을 수 있다.',
        ],
      },
      {
        name: '조류인플루엔자 인체감염증',
        symptom: '발열, 기침, 인후통, 근육통 등',
        route:
          '조류 인플루엔자 바이러스에 감염된 가금류와의 접촉 또는 감염된 조류의 배설 · 분비물에 오염된 사물과의 접촉',
        precaution: [
          '쥐유행 바이러스 주에 대한 인플루엔자백신',
          '호흡기 증상이 있는 사람과 밀접한 접촉을 피한다.',
          '눈, 코, 입을 만지는 것을 피한다.',
          '가금류 감염국과 가금류 농장 및 철새 도래지 방문을 자제한다.',
        ],
      },
    ],
  },
];

export default winter;
