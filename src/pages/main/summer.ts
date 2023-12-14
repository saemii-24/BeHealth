// import { SpreadType } from "./spring";
import { SeasonType } from './spring';

let summer: SeasonType[] = [
  {
    spread: [
      {
        name: '콜레라',
        symptom: '고열, 발진, 기침, 콧물, 눈물, 눈의 충혈 등',
        route: '환자와 보균자의 대소변에 오염된 식수나 음식물로 감염',
        precaution: [
          '제일 효과적인 방법은 오염된 음식물이나 식수의 섭취를 금하는 것이다.',
          '물과 음식물을 취급할 때 철저히 끓이거나 익혀서 먹어야 한다.',
        ],
      },
      {
        name: '장티푸스',
        symptom: '설사, 지속적인 고열, 식욕부진, 두통 등',
        route:
          '환자와 보균자의 대소변에 오염된 물 또는 음식물, 보균자가 부주의하게 다룬 우유나 유제품',
        precaution: [
          '전국민이 예방접종을 받을 필요는 없고, 질병에 걸릴 가능성이 높은 사람이나, 장티푸스에 걸려 타인에게 전염시킬 위험이 높은 사람만 예방접종이 필요하다.',
        ],
      },
      {
        name: '세균성이질',
        symptom: '설사, 고열, 혈액·점액이 섞인 대변 등',
        route:
          '불완전급수와 식품매개로 주로 전파, 환자나 보균자의 대변으로 오염된 물이나 음식물로 감염(환자가 배변 후 만진 문고리, 타월 등에 의해 전염)',
        precaution: [
          '소량의 균으로도 감염이 일어날 수 있으므로 장관배설물의 위생적 관리를 요하며, 감염된 환자의 경우 식품취급, 탁아, 환자간호를 금해야 한다.',
          '대변과 오염된 물건에 대한 철저한 소독이 요구된다.',
        ],
      },
      {
        name: '레지오넬라증',
        symptom: '발열, 오한, 마른기침이나 소량의 가래를 동반하는 기침, 근육통, 두통 등',
        route:
          '대형 건물의 냉각탑수, 에어컨, 샤워기, 수도꼭지, 장식분수, 분무기 등의 오염된 물 속의 균이 비말 형태로 인체에 흡입되어 전파',
        precaution: [
          '냉각탑 및 저수탱크 청소ㆍ소독, 에어컨 필터, 물받이등 청소소독',
          '의료기관 에서는 환자 치료에 사용되는 기구 등 소독하여 사용',
        ],
      },
      {
        name: '비브리오패혈증',
        symptom: '발열, 근육통, 설사 후 36시간이내 출혈 및 홍반 등',
        route: '오염된 어패류를 생식하거나 상처난 피부가 오염된 바닷물에 접촉할 때 감염',
        precaution: [
          '고위험군 환자는 어패류 생식을 피한다.',
          '피부에 상처가 있는 사람은 오염된 바닷물과 접촉 금지',
          '어패류는 -5℃이하로 저온 저장, 또는 60℃이상 가열처리',
        ],
      },
      {
        name: '뇌염',
        symptom: '두통, 발열, 구토, 설사 등',
        route: '일본뇌염모기(빨간집모기)가 산란기에 사람을 흡혈하여 감염',
        precaution: [
          '모기 활동시간인 저녁부터 새벽까지 외출을 가급적 피한다.',
          '외출시에는 긴소매 상의.바지를 입고 검은색은 모기를 유인하므로 피한다.',
          '문과 창에 방충망을 설치하거나 모기장을 사용한다.',
          '논, 웅덩이 등 물이 고인 곳이나 축사에는 반드시 살충제를 뿌린다.',
        ],
      },
      {
        name: '말라리아',
        symptom: '막연한 불안감, 고열, 오한, 두통, 근육통, 오심, 구토, 설사',
        route: '비말 등의 공기매개감염, 환자의 비.인두 분비물과 직접 접촉',
        precaution: [
          '모기에 물리지 않도록 하며, 말라리아 위험지역으로 여행시 의사의 처방에 따라 규칙적으로 말라리아 억제제를 복용한다.',
        ],
      },
    ],
    preventive: [
      '반드시 안전한 식수(끓인 물, 생수)를 사용해야 한다.',
      '안전하게 처리된 식품을 선택하고 충분히 익혀 먹는다.',
      '조리한 음식물은 즉시 먹고 잘 보관하여 먹기 전 충분히 재가열 한다.',
      '날 음식과 조리된 음식은 섞이지 않도록 한다.',
      '손을 자주 씻는다.(손에 상처가 있는 사람은 조리를 삼간다)',
      '부엌 표면을 깨끗이 관리한다.',
    ],
  },
];

export default summer;
