import { SeasonType } from './spring';
let month = new Date().getMonth();

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
    common: [
      {
        title: `${month + 1}월에 알아두면 좋은 겨울철 행동 요령`,
        content: `추운 겨울 안전하고 건강하게`,
        img: '/images/winter.jpg',
        imgColor: 'dark',
      },
      {
        title: `겨울철 건강 수칙`,
        content: `건강한 겨울나기를 위한`,
        img: '/images/snowman.jpg',
        imgColor: 'dark',
      },
      {
        title: '해가 빨리 지면 우울증이 생긴다?',
        content: '겨울철 잘못된 건강상식 6가지',
        img: '/images/winter-twilight.jpg',
        imgColor: 'dark',
      },
      // {
      //   title: '눈물 콧물 쏙 빼는 알레르기 질환 예방 관리법',
      //   content: '꽃 피는 봄이 무섭다?',
      //   img: '/images/pollen.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '꾸벅꾸벅 졸음이 몰려오는 춘곤증',
      //   content: '봄철 건강의 적신호',
      //   img: '/images/sleep.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '잘 먹으면 약초 잘못 먹으면 독초',
      //   content: '봄 산나물,',
      //   img: '/images/hrebs.jpg',
      //   imgColor: 'light',
      // },
      // {
      //   title: '쨍쨍한 햇빛과 높은 기온 조심!',
      //   content: '덥고 따가운 여름 질병',
      //   img: '/images/summer.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '여름이 불편한 하지정맥류',
      //   content: '자꾸 붓고 아픈 다리, 방치하지 마세요!',
      //   img: '/images/legs.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '여름철 늘어나는 이명',
      //   content: '내 귀에 도청 장치가 있다?,',
      //   img: '/images/ear.jpg',
      //   imgColor: 'light',
      // },
      // {
      //   title: '가을철 건강 수칙',
      //   content: '알고 있지만 지키기 쉽지 않은',
      //   img: '/images/autumn.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '건강하고 안전하게 산행하는 법',
      //   content: '오색으로 물든 가을',
      //   img: '/images/autumn_mountain.jpg',
      //   imgColor: 'dark',
      // },
      // {
      //   title: '노릇노릇 맛있구마, 고구마',
      //   content: '제철 맞아 맛과 영양을 듬뿍 머금은',
      //   img: '/images/sweet_potato.jpg',
      //   imgColor: 'dark',
      // },
    ],
    commonPop: [
      {
        explain: `올 겨울은 예년보다 춥고 일시적으로 기온이 뚝 떨어지는 등 기온의 변화가 클 것이라고 합니다.\n
        갑작스러운 한파 시 실외활동을 자제하고 외출 시 보온에 각별히 주의하여 주시기 바랍니다.`,
        info: [
          {
            name: '한파 시 행동요령',
            content: `✔ 갑자기 기온이 떨어지면 심장과 혈관계통, 호흡기 계통, 신경계통, 피부병 등은 급격히 악화될 우려가 있으므로, 유아, 노인 또는 환자가 있는 가정에서는 난방에 신경 써야 합니다.\n 
            ✔ 혈압이 높거나 심장이 약한 사람은 노출부위를 따뜻하게 하고 특히, 머리 부분이 따뜻하도록 모자나 귀마개, 목도리등을 착용해야 합니다.\n 
            ✔ 운동 전 충분한 스트레칭을 하여 관절의 가동(稼動) 범위를 넓힘으로써 부상을 방지하여야 합니다.\n
            ✔ 장기간 집을 비우게 될 때는 수도꼭지를 조금 열어 물이 흐르도록 하여 동파사고를 막아야 합니다.\n
            ✔ 수도계량기 보호함 내부는 헌옷으로 채우고, 외부는 테이프로 빈틈없이 막아 찬 공기가 스며들지 않도록 합시다.\n
            ✔ 수도관이 얼었을 때는 갑자기 뜨거운 열을 가하지 말고, 헤어드라이기 등 온열기를 이용하여 녹이거나, 미지근한 물로 녹여야 합니다.`,
            content2: `✔ 도로의 결빙에 대비하여 스노체인 등 예방조치를 마련하고, 시트를 높이고 앞 유리 성에를 완전히 제거하는 등 시야를 넓혀 빙판길 등 만약의 돌발 사태에 대비합시다.\n
            ✔ 커브 길을 돌 때는 미리 속도를 줄이고 기어변속을 하지 않도록 해야 합니다. 평소보다 저속 운행하고, 차간거리를 확보하는 등 안전사고 예방운전을 합시다.`,
            content3: `✔ 과도한 전열기기 사용을 금지하고, 인화물질을 전열기 부근에 두지 않아야 합니다.\n
            ✔ 대단위 아파트 단지 등에서는 전열기를 사용할 때 1시간 사용 후 15분 휴식을 생활화하여 변압기의 과부하를 방지해야 합니다.\n
            ✔ 하나의 콘센트에 다시 여러 개의 콘센트를 연결하는 등 과도한 플러그(문어발식) 사용은 금지해야 합니다.`,
          },
          {
            name: '빙판길 낙상사고 줄이는 요령',
            content: `✔ 보폭을 평소보다 10~20% 줄이기\n 
            ✔ 굽이 낮고 미끄럼 방지 밑창 신발 신기\n 
            ✔ 주머니에 손을 넣거나, 스마트폰을 보면서 걷지 않기\n
            ✔ 가능하면 손에 물건을 들고 걷지 않기\n 
            ✔ 그늘진 곳 피하고, 급격한 회전을 하지 않기\n 
            ✔ 움직임을 둔하게 하는 두꺼운 옷은 피하기\n
            ✔ 넘어질 때는 몸을 낮게 하여 주저앉거나 으로 구르기\n 
            ✔ 수면제, 진정제 등 어지럼증 유발약물 복용 후 외출하지 않기`,
          },
          {
            name: '강설 시 행동요령',
            content: `✔ 자가용차량 이용을 억제하고 대중교통(지하철, 버스 등) 수단을 이용\n 
            ✔ 운전 시 커브길, 고갯길, 고가도로, 교량 등에서는 서행\n
            ✔ 운전 시 눈길에서는 제동거리가 길어지므로 차간 안전거리 확보하여 브레이크 사용을 자제
            ✔ 운전 시 교차로나 횡단보도 앞에서는 감속 운전 `,
            content2: `✔ 외출 시에는 미끄러지지 않도록 바닥면이 넓은 운동화나 등산화를 착용\n
            ✔ 미끄러운 눈길을 걸을 때에는 주머니에 손을 넣지 말고 보온장갑 착용\n
            ✔ 횡단보도를 건널 때에는 차량이 멈추었는지 확인하고 도로에 진입\n
            ✔ 계단을 오르내릴 때에는 난간을 잡고 다니는 것이 안전`,
            content3: `✔ 내 집 주변 빙판길에는 염화칼슘이나 모래 등을 뿌려서 미끄럼 사고를 예방\n
            ✔ 노후가옥은 안전점검으로 붕괴 예방\n
            ✔ 평상시보다 조금 일찍 출근하고 일찍 귀가`,
          },
          {
            name: '내 집 앞 눈 치우기',
            content: `✔ 주간 - 눈이 그친 후 4시간 이내에 치운다.\n 
            ✔ 야간 - 다음날 오전 11시까지 치운다(단, 눈이 10cm 이상 오는 날은 24시간 이내).\n 
            ✔ 눈ㆍ얼음 제거가 가능한 경우: 보도 등의 가장자리 나 그 밖의 장소로 옮기기\n
            ✔ 눈ㆍ얼음 제거가 불가능한 경우: 눈ㆍ얼음을 녹이는 재료(염화칼슘, 소금 등) 또는 모래 등을 뿌리고, 눈ㆍ얼음이 녹은 후 사용된 모래 등을 제거\n`,
          },
          {
            name: '겨울철 건강 상식',
            content: `✔ 1-2시간마다 실내공기 환기\n 
            ✔ 실내 적정온도(18 ~ 20도) 유지\n 
            ✔ 하루 1.5리터 이상의 수분 섭취\n
            ✔ 체온 유지를 위해 두꺼운 옷 한 벌보다는 얇은 옷을 여러 벌 입기\n
            ✔ 동상예방 활동으로 마스크, 모자, 장갑 등을 이용하여 외부에 노출되는 모든 신체 부위 감싸기\n
            ✔ 길이 미끄러울 수 있으므로 야외 운동 시 낙상에 주의\n
            ✔ 새벽운동 피하기(고혈압, 당뇨, 심장질환자 등 만성질환자)\n
            ✔ 춥거나 눈이 온다면 실내에서 운동. 특히 고혈압 등 만성병 환자는 실내에서 운동`,
          },
        ],
        source: 'https://www.ydp.go.kr/story/2021/12/1.htm',
      },
      {
        explain: `겨울은 다양한 건강 문제가 발생하는 계절이다. 기습 한파나 폭설 등으로 일상생활이나 야외 활동에 큰 제약도 받는다.\n
        또 저체온증, 동상, 빙판길 낙상 사고 등 추운 날씨로 인한 계절성 질병에도 노출되기 쉽다.\n 
        ${month + 1}월, 건강한 겨울나기를 위한 수칙을 체크해보자.`,
        info: [
          {
            name: '실내 생활 수칙',
            content: `실내에서 생활하는 시간이 압도적으로 증가하는 겨울에는 가벼운 실내 운동과 적절한 수분 섭취, 균형 있는 영양분을 갖춘 식사가 건강을 지키는 기본이 된다.\n 
            이 중 수분 섭취와 균형 있는 영양분을 갖춘 식사는 체온을 유지하는 데 도움이 되기 때문에 무엇보다 중요하다.\n
            특히 물이나 단맛 나는 음료는 체온 유지에 도움을 주지만, 술이나 카페인 음료는 체온을 급격하게 떨어뜨릴 수 있다는 사실을 명심하자.`,
            content2: `이 밖에도 체크해야 할 수칙이 있다.\n 
            첫 번째로 외출 후 손 씻기 등 개인위생을 철저히 하는 것이다. 겨울철 식중독으로 유명한 노로바이러스 예방도 손 씻기에서 시작한다.\n
            갑작스러운 대설이나 한파에도 실내 난방은 18~20℃ 정도로 적정하게 유지한다. 특히 가정 내 노인이나 영·유아가 있다면 체온과 실내 온도를 자주 확인하고 충분히 따뜻하게 유지해야 한다.\n
            환기도 중요하다. 하루 2~3시간 간격으로 3회, 최소 10분 이상 창문을 열어 환기시키는데, 창문을 2개 열어 맞바람을 치게 하는 것이 효과적이다. 무엇보다 오염된 공기가 바닥에 깔려 있는 시간대를 피해 오전 10시~오후 7시에 하는 것이 좋다.\n
            겨울철에는 공기 중 수증기 부족과 난방으로 실내가 매우 건조하므로 실내 습도(40~50%)를 적정하게 유지하는 게 중요하다. 젖은 빨래(수건) 널기, 물 떠놓기, 화분이나 수경식물 기르기 등도 실내 습도를 유지하는 요령이다.\n
            섭취가 과할 수 있으므로 담백한 음식을 적당량 먹어 채우는 것이 가장 좋다. 시간 여유가 없다면 죽이나 우유, 사탕 등을 녹여 먹는 것도 큰 도움이 된다.`,
            content3:
              'CHECK POINT : 외출 후 손 씻기, 창문이나 방문 틈새 막기, 실내 환기는 맞바람 치도록 2개 창문 열기, 실내 습도 40~50% 유지, 적정 실내 온도(18~20℃) 유지, 노약자는 외출 시 지팡이 이용',
          },
          {
            name: '실외 활동 수칙',
            content: `겨울철 실외 활동은 옷을 따뜻하게 입는 것부터 시작한다. 조금 크고 가벼운 옷을 여러 벌 겹쳐 입고 물에 젖지 않도록 조심한다. 면 소재보다는 울이나 실크 혹은 합성섬유 옷으로, 내피가 있는 옷이 체온 유지에 도움이 된다.\n 
            가급적 모자나 장갑, 마스크·목도리를 착용한다. 체온은 머리를 통해 발산하므로 모자를 쓰고, 장갑은 벙어리장갑이 보온력이 더 좋다.\n
            마스크와 목도리로 목을 감싸면 찬 공기로부터 폐를 보호한다. 갑작스러운 한파나 대설 시 차가운 기온은 심장과 뇌에 추가적인 무리를 주므로 이런 날엔 무리한 운동을 절대 삼간다.\n
            고혈압이나 심·뇌혈관질환이 있다면 눈 치우는 등의 활동도 자제하고, 옷을 따뜻하게 입고 천천히 움직인다.\n
            무엇보다 외출 전에 우리 신체가 실제로 느끼는 체감온도를 확인하는 것이 중요하다. 체감온도가 낮은 경우 단시간만 추위에 노출되어도 동상이 발생할 수 있기 때문이다.`,
            content2: `또 겨울철 보행 시에는 호주머니에 손을 넣고 걸으면 절대 안 된다. 손을 호주머니에 넣고 걸을 경우 평형감각이 둔해져 넘어지기 쉽다.\n
            넘어질 때 손으로 바닥을 짚을 경우 몸무게의 3배 정도 충격을 완화해 치명적 부상을 막을 수 있다.\n 
            만약 어쩔 수 없이 빙판길을 걷는다면 허리를 굽혀 중심을 낮추고 걷는 속도와 보폭을 10~20% 줄인다.`,
            content3: `CHECK POINT : 체감온도(wind chill) 확인, 모자·장갑· 마스크·목도리 착용, 여러 벌 겹쳐 입고 물에 젖지 않게 하기, 무리한 운동 삼가고 천천히 움직이기, 고혈압이나 심·뇌혈관질환이 있다면 눈 치우기 자제, 보행 시 호주머니에 손 넣고 걷지 않기`,
          },
          {
            name: '여행 시 수칙',
            content: `여행 출발 전과 여행 중 수시로 기상예보를 확인한다. 만약 여행 지역에 한파나 대설 등 기상 특보가 예상된다면 여행을 취소하는 것이 좋다.\n 
            또 여행 전 가족이 나 지인 등에게 목적지와 귀가 일정을 알리고, 당초 예정보다 귀가가 늦어지면 경찰에 신고해달라고 요청해두는 것이 안전하다.\n 
            자동차로 여행하는 경우 스노타이어 체인을 탑재하고, 시야가 좋지 않거나 빙판 또는 눈 덮인 도로나 다리는 가급적 통과하지 않는다.\n
            차량 여행 시 만약 고립되었다면 차 안에 머무는 것이 가장 안전하다. 또 자동차 안테나 등을 이용해 밝은색 천 조각을 묶어놓아 구조 신호를 보낸다.`,
            content2: `동상에 걸렸을 때는 조이는 신발이나 옷은 벗고 따뜻한 물에 담근 후 보온을 유지한 채 즉시 병원에 가야 한다. 이때 동상이 의심되는 부위를 따뜻한 물에 담그되, 해당 부위를 문지르거나 비비지 않도록 한다.\n
            그리고 녹지 않는 눈은 절대 먹어선 안 된다. 체온을 떨어뜨릴 수 있기 때문. 체온 유지를 위해 다른 사람과 서로 껴안고 있는 것도 도움이 된다.`,
            content3: `CHECK POINT : 수시로 기상예보 확인, 가족이나 지인 등에게 목적지와 귀가 일시 등을 알림, 예정보다 귀가가 늦어지면 경찰에 신고해달라고 요청, 스노타이어 체인 탑재, 긴급 상황 대비 휴대폰 소지 및추가 배터리 준비, 여분의 따뜻한 의복 준비`,
          },
        ],
        source:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202001/sub/s02_03.html',
      },
      {
        explain: `겨울철이 되면 면역력이 떨어진다. 낮은 기온과 쌀쌀한 바람 때문에 병이 잘 낫지 않을 것이라는 근심이 노시보 효과를 일으키기도 한다.\n
        겨울철 건강에 대한 흔한 잘못된 상식을 알아두면 근심을 덜고 활동적인 겨울철을 날 수 있다.`,
        info: [
          {
            name: '겨울 알레르기는 없다.',
            content: `겨울에 콧물이 흐르거나 목구멍이 따끔거리면 감기일수도 있지만 알레르기가 그 원인일 수도 있다.\n 
            미국천식알레르기협회(Asthma and Allergy Foundation of America)’에 따르면 실내 알레르기의 경우 겨울에 보다 심해지는 경향이 있다. 겨울에 환기를 잘 시키지 않기 때문에 실내 공기가 여름보다 나빠진다.\n
            만약 코 막힘 등의 증상이 10일 이상 지속된다면 알레르기가 원인일 수 있으므로 적절한 치료법을 찾는 것이 바람직하다.`,
          },
          {
            name: '추운 날씨에 바깥 활동 자제해야한다.',
            content: `스포츠 및 운동의 과학저널에 실린 연구에 따르면 추운 온도에서 달리기를 하면 기록이 단축된다. 달리기 속도가 빨라져 짧은 시간 안에 더 많은 운동효과를 거둘 수 있다는 것이다.\n 
            또 운동 강도가 높아지면 엔도르핀의 수치가 올라가 즐거운 기분을 느낄 수 있다. 한 여름처럼 땀이 흐르지 않아 장시간 자유롭게 운동하기에도 유리하다.`,
          },
          {
            name: '해가 빨리 지면 우울증이 생긴다.',
            content: `이 말은 어느 정도 일리가 있다. 일조량이 줄어들면 멜라토닌의 분비가 줄어들면서 우울감이 가중돼 계절성 우울증(SAD)이 나타날 수 있기 때문이다.\n 
            하버드의과대학원의 연구에 따르면 겨울에 우울증을 보이는 사람들은 SAD보다는 연말 가족 모임, 한해가 지난 것에 대한 스트레스 등에 의해 우울감이 촉발되는 경우가 많다.\n 
            또 실내에 은둔해 있거나 운동이 부족해도 우울감이 나타날 수 있으므로 적당한 활동과 스케줄 조율이 필요하다.`,
          },
          {
            name: '대부분의 열손실은 머리에서 일어난다.',
            content: `이 말은 어느 정도 일리가 있다. 일조량이 줄어들면 멜라토닌의 분비가 줄어들면서 우울감이 가중돼 계절성 우울증(SAD)이 나타날 수 있기 때문이다.\n 
            하버드의과대학원의 연구에 따르면 겨울에 우울증을 보이는 사람들은 SAD보다는 연말 가족 모임, 한해가 지난 것에 대한 스트레스 등에 의해 우울감이 촉발되는 경우가 많다.\n 
            또 실내에 은둔해 있거나 운동이 부족해도 우울감이 나타날 수 있으므로 적당한 활동과 스케줄 조율이 필요하다.`,
          },
          {
            name: '찬 공기가 감기를 일으킨다.',
            content: `기온이 떨어지는 것만으로 감기에 걸릴 수 없다. 전염병과 싸우기 위한 세포들은 추운 곳에서 활발하게 활동하는 경향이 있다.\n 
            이는 차가운 기온에 의한 스트레스를 이기려는 우리 몸의 전략이다. 최근 연구는 차가워진 공기가 몸에 남아있는 미량의 바이러스를 활성화해서 감기에 걸리기 쉬워진다는 점을 밝혀냈다.\n 
            찬 날씨가 곧 감기에 걸리게 하지는 않지만 몸에 이미 바이러스가 들어와 있다면 감기 증상을 일으키기 쉬운 조건을 만드는 셈이다.`,
          },
          {
            name: '술을 마시면 몸이 따뜻해진다.',
            content: `술을 마시면 속이 따뜻해지는 느낌이 든다. 혈액이 내부기관에서 피부 표면으로 몰려들기 때문인데, 이 말은 몸의 중심부 온도는 오히려 내려간다는 의미다.\n 
            또 술을 마시면 추울 때 몸이 떨리거나 열이 발생하도록 만드는 신체 능력이 떨어지므로 술을 마신다고 몸을 따뜻하게 덥힐 수 있는 것은 아니다.`,
          },
        ],
        source:
          'https://kormedi.com/1544418/%EA%B2%A8%EC%9A%B8%EC%B2%A0-%EC%9E%98%EB%AA%BB%EB%90%9C-%EA%B1%B4%EA%B0%95-%EC%83%81%EC%8B%9D-6%EA%B0%80%EC%A7%80/',
      },
    ],
  },
];

export default winter;
