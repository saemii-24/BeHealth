interface SpreadType {
  name: string;
  symptom: string;
  route: string;
  precaution: string[];
}
export interface CommonType {
  title: string;
  content: string;
  img: string;
}

export interface InfoType {
  name: string;
  content: string;
  content2?: string;
  content3?: string;
}
export interface CommonPopType {
  explain: string;
  info: InfoType[];
}

export interface SeasonType {
  spread: SpreadType[];
  common: CommonType[];
  commonPop: CommonPopType[];
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
    common: [
      {
        title: '눈물 콧물 쏙 빼는 알레르기 질환 예방 관리법',
        content: '꽃 피는 봄이 무섭다?',
        img: '/images/pollen.jpg',
      },
      {
        title: '꾸벅꾸벅 졸음이 몰려오는 춘곤증',
        content: '봄철 건강의 적신호',
        img: '/images/sleep.jpg',
      },
      {
        title: '건강의 첫걸음, 면역력 높이는 방법',
        content: '환절기가 돌아왔다',
        img: '/images/season_change.jpg',
      },
    ],
    commonPop: [
      {
        explain: `꽃가루가 날리고 황사가 불어닥치는 봄철, 알레르기 질환 주의보가 발령됐다.
        일교차도 커서 감기에 걸리기 십상이다. 하루가 달리 건조해지는 날씨는 차라리 애교 수준이다.
        아토피, 천식, 알레르기 비염 환자에겐 공포의 대상인 봄. 그 어느 때보다 세심한 관리가 필요하다.`,
        info: [
          {
            name: '알레르기 비염',
            content: `발작적 재채기와 맑은 콧물·코막힘 등이 주된 증상이며, 눈과 코 주위의 가려움증을 동반하는 경우도 흔하다.\n
            또 두통을 유발하거나 후각이 떨어질 수 있고, 부비동염이나 중이염·인두염을 동반하기도 한다.`,
            content2: `✔ 집먼지진드기 접촉을 차단하기 위해 침대·이불·베개·담요 등 먼지가 쉽게 달라붙는 물건은 지퍼가 달린 커버를 사용하고 수시로 빨고 삶는다.\n
            ✔ 알레르기 비염이 있는 경우 코를 세척해 코딱지를 제거하면 숨쉬기가 한결 편하고, 점막에 붙어 있는 알레르기 유발 물질을 씻어낼 수 있다.\n 
            ✔ 금연은 필수이며, 담배 피우는 사람 옆에는 가지 않는다.\n 
            ✔ 실내는 청소를 자주 하고, 급격한 온도 변화를 피한다.\n 
            ✔ 공해·꽃가루·황사가 심한 날엔 외출을 삼가고, 야외 활동 시 마스크를 꼭 착용한다.`,
          },
          {
            name: '아토피 피부염',
            content: `만성적으로 재발하는, 가려움증을 동반한 피부염이다.\n
            영·유아기에 흔히 발생하며, 환자나 가족 중 아토피 천식, 알레르기 비염 같은 알레르기 질환을 동반하는 경우가 많다.\n
            대체로 유·소아기에 증상이 심하다 나이가 들면서 호전되는 경향이 있다. 아토피피부염의 발생 기전이나 원인은 아직 확실히 밝혀지지 않았다.`,
            content2: `✔ 피부 보습이 가장 중요하다. 보습제는 하루 두 번 이상, 목욕 후에는 3분 이내에 바른다.\n 
            ✔ 목욕은 매일 미지근한 물로 20분 이내에 끝내고, 비누 목욕은 2~3일에 한 번, 때는 밀지 않는다.\n 
            ✔ 순면 소재 옷을 입는다.\n 
            ✔ 세탁 시 세제를 적게 쓰기 위해 가루보다는 액상을 사용하고, 2회 이상 충분히 헹군다.`,
          },
          {
            name: '천식',
            content: `기관지 또는 기도에 만성적 알레르기 염증 반응이 생기는 질환으로, 기관지가 좁아져 숨이 차고 좁은 기관지를 통해 공기가 지나가면서 쌕쌕거리는 소리, 즉 천명(음)이 나고 발작적 기침 증상이 나타난다.\n
            천식이 의심되는 증상이 나타나면 가능한 한 빨리 전문의와 상담해 적절한 치료를 받는 것이 중요하다.`,
            content2: `✔ 금연은 필수이며, 담배 피우는 사람 옆에는 가지 않는다.\n  
            ✔ 감기나 독감을 예방하기 위해 손을 깨끗이 자주 씻는다.\n  
            ✔ 꽃가루·공해·황사가 심한 날엔 외부 활동을 자제하고, 외출 시 반드시 마스크를 착용한다.\n  
            ✔ 천식 발작에 대비해 항상 흡입기를 소지하고, 정확한 사용법을 익혀둔다. `,
          },
          {
            name: '알레르기 결막염',
            content: `감염 원인균 없이 어떤 유발 인자에 의해 전신적 또는 국소적 알레르기 반응이 결막에 발생하는 질환이다.\n
            더러운 손으로 눈을 비비거나 만지는 등 손 위생의 영향이 크다.\n 
            또 봄에 알레르기 결막염이 많이 발병하는 이유는 계절성 알레르기 결막염의 경우 꽃가루, 풀, 동물의 털이 자주 날리기 때문이다.`,
            content2: `✔ 집먼지나 동물의 비듬 등을 없애기 위해 집을 청결히 하고, 환기도 자주 하며, 침대·이불·베개·담요 등을 깨끗이 세탁한다.\n  
            ✔ 가려움증이 심한 경우 눈을 비비지 말고, 얇은 수건에 얼음을 싸서 냉찜질하거나 찬물로 눈 주위를 씻는다.\n  
            ✔ 유행성 결막염에 걸린 경우 충혈이나 부종으로 안대를 하는데, 자주 교체하지 않으면 오히려 2차 세균 감염의 원인이 되므로 안대를 착용하지 않는다.\n  
            ✔ 안대를 착용해야 한다면 수시로 교체한다.`,
          },
        ],
      },
      {
        explain: `따사로운 봄 햇살에 졸음이 쏟아지는 춘곤증(春困症)은 우리에게 익숙한 증상입니다. 바뀐 기온에 몸이 적응하는 과정에서 생기는 일시적 환경 부적응 현상이죠.
        계절마다 겪는 일이지만, 몸이 보내는 이상 신호일 수 있으니 잘 살펴보는 것이 중요합니다.`,
        info: [
          {
            name: '춘곤증',
            content: `우리가 흔히 말하는 춘곤증이란 용어는 의학에서 사용하는 진단명은 아닙니다. 봄철에 많은 사람이 느끼는 증상이기 때문에 춘곤증이라 부르는 것이죠.\n
            추운 겨울이 지나고 따스한 봄이 오는 시기에 계절 변화에 적응하지 못해 생기는 일련의 증상을 통틀어 이르는 말입니다. 영양이 불균형하거나 겨울 동안 움츠리면서 운동이 부족한 사람에게 심하게 나타나는 편입니다.`,
            content2: `대표 증상으로는 피로감과 졸음 외에도 식욕부진, 소화불량, 현기증 등을 들 수 있습니다.\n
            보통 1~3주 정도 지나면 없어지는 게 일반적입니다. 하지만 오랜 시간 계속된다면 다른 질병의 초기 신호일 수 있습니다.\n 
            업무 스트레스가 심한 40대 이후 남성이 춘곤증 같은 증상으로 오래 고생할 경우 만성피로 증후군이나 간질환, 당뇨병, 암 등의 가능성을 배제할 수 없기 때문이죠.\n 
            40대 이후 여성에게서는 빈혈, 갑상선 질환의 가능성도 있어요. 갱년기가 시작되는 50세 이후에는 갱년기 증후군의 하나로 피로를 호소할 수 있기에 단순히 환절기에 생기는 춘곤증으로 여기지 말고 전문의와 상담하는 것이 좋습니다.\n 
            봄에 하루 이틀 느끼는 춘곤증은 우리 몸의 놀라운 증상이기도 합니다. 새로운 계절을 준비하는 자연스러운 현상입니다.`,
          },
        ],
      },
      {
        explain: `환절기에는 감기와 알레르기성 비염부터 염증과 대상포진까지 다양한 질환의 발생률이 증가하는데 이는 면역력과 깊은 연관이 있다.
        대기가 건조하고 일교차가 큰 환절기에는 면역력이 떨어지기 쉽기 때문이다. 환절기를 건강하게 보내기 위해서는 면역력 증진을 위한 영양소 섭취가 필수다. 
        그 외 면역력을 높일 수 있는 유용한 생활습관들을 안내한다.`,
        info: [
          {
            name: '몸을 건강하게 지키는 면역이란?',
            content: `건강한 몸은 체내외 환경이 변하더라도 온도, 산성도, 혈압, 혈당 등을 일정하게 유지한다. 이를 ‘항상성의 유지’라고 하며, 항상성이 일정하게 유지돼야 몸이 정상면역체계를 유지할 수 있다.\n
            하지만 낮과 밤의 일교차가 커지는 가을철에는 신체가 적절한 체온을 유지하는 데 어려움을 겪기 때문에 항상성 유지가 어려워지고 몸의 균형이 깨지기 쉽다.\n
            면역이 저하되는 것은 물론, 각종 질병에 걸릴 위험도 높아지는 것이다. 그래서 환절기에는 면역력을 높이는 일이 건강관리의 핵심으로 손꼽힌다.`,
            content2: `면역에는 선천면역과 적응면역(후천면역)이 있는데, 선천면역은 태어날 때부터 타고난 면역으로 감염물질에 대해 방어작용을 하는 우리 몸의 1차 보호수단이다.\n
            적응면역은 쉽게 말해 예방접종을 통해 세균이나 바이러스에 대한 항체 생성을 미리 유도하고 기억세포를 활성화시켜 향후 특정 세균이나 바이러스에 노출될 때 효과적으로 방어하는 획득 면역을 가리킨다.`,
            content3: `안타깝게도 이러한 면역력은 하루아침에 생겨나고 좋아지는 것이 아니기에 면역력을 높이려면 평소 건강을 위해 규칙적으로 생활하는 노력이 필요하다.`
          },
          {
            name: '면역력을 높이는 생활습관',
            content: `환절기에 주의해야 할 질병은 크게 세 가지인데, 그중 가장 흔한 것이 계절성 질환인 감기, 독감이다. 건조한 공기로 코와 기관지가 마르면서 바이러스 침입에 대한 면역이 떨어져 걸리기 쉽다.\n
            두 번째는 건조해진 공기로 인해 피부 수분을 빼앗겨 생기는 아토피성 피부염이다. 긁다보면 더 심한 가려움을 유발해 증상이 악화되기 쉽다.\n
            세 번째는 환절기에 더 많이 발생하는 대상포진이다. 면역이 떨어졌을 때 신경세포에 잠복해있던 수두 바이러스가 피부신경을 따라 피부에 도달해 발진, 물집, 심한 통증 등을 유발한다.`,
            content2: `이러한 질병을 예방하기 위해서는 주변 환경에 신경 쓰는 것이 중요하다.`,
            content3: `피부나 코, 기관지 점막의 건강을 위해 습도가 30% 이하로 떨어지지 않도록 관리한다. 또한 성인 기준 하루 1.5L(8잔) 정도의 물을 충분히 섭취해야 한다.\n
            수면은 하루 7~8시간을 자는 것이 피로 해소에 도움이 되며, 멜라토닌이 분비되는 밤 11시부터 새벽 3시 사이에 깊게 잠드는 것이 좋다.\n
            이외에도 혈액순환을 돕는 규칙적인 운동, 스트레스 관리, 예방접종, 조기진료 등을 통해 질병을 예방하고 면역력을 키워가는 것이 중요하다.`
          },
          {
            name: 'TIP. 환절기에 먹으면 도움이 되는 음식',
            content: `블루베리\n
            세포노화방지 및 항암작용 등의 효과가 있는 것으로 알려진 안토시아닌이 대량 함유돼 있어 노화 예방 및 활성산소 억제, 면역력 향상 등에 효능이 있다.`,
            content2: `버섯\n
            세포 면역을 증가시키는 글루칸 성분이 많으며 각종 비타민, 미네랄이 풍부해 피로회복에 도움을 준다.`,
            content3: `브로콜리\n
            레몬의 2배가 넘는 비타민 C 외에도 단백질, 철분, 비타민 A 등이 함유돼 있어 감기 예방이나 피부건강에 효과가 좋다.`
          },
        ],
      },
    ],
  },
];

export default spring;
