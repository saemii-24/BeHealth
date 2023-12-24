interface ObjectType {
  name: string;
  address?: string;
}
interface SourceType {
  graphic: ObjectType[];
  api: ObjectType[];
  news: ObjectType[];
  common: ObjectType[];
}

let source: SourceType[] = [
  {
    graphic: [
      {
        name: 'font-awesome',
      },
      {
        name: 'pixabay',
      },
      {
        name: 'unsplash',
      },
      {
        name: '[MIT License] react-icons (BoxIcons, Feather, Heroicons 2, Ionicons 4, Ionicons 5, Phosphor Icons, Tabler Icons)',
      },
      {
        name: '[CC BY 4.0 License] react-icons (Font Awesome 5, Font Awesome 6)',
      },
      {
        name: '[Apache License Version 2.0] react-icons (Material Design icons, Remix Icon)',
      },
      {
        name: 'Down arrow icons created by Freepik - Flaticon',
        address: 'https://www.flaticon.com/free-icons/down-arrow',
      },
    ],
    api: [
      {
        name: '국민건강보험공단_검진기관 찾기',
        address: 'https://www.data.go.kr/data/15001671/openapi.do',
      },
      {
        name: '식품의약품안전처_의약품개요정보(e약은요)',
        address: 'https://www.data.go.kr/data/15075057/openapi.do',
      },
      {
        name: '국립중앙의료원_전국 약국 정보 조회 서비스',
        address: 'https://www.data.go.kr/data/15000576/openapi.do',
      },
    ],
    news: [
      {
        name: '파주시 보건소 계절별 감염병 예방법',
        address:
          'https://clinic.paju.go.kr/clinic/clinic_04/clinic_04_05/clinic_04_05_03.jsp',
      },
      {
        name: '영암군청 계절별 주요감염병 안내',
        address: 'https://www.yeongam.go.kr/home/health/clean_manage/yeongam.go',
      },
      {
        name: '상주시 보건소 계절별 감염병',
        address:
          'https://health.sangju.go.kr/main/main.jsp?home_url=health&befor_home_url=health&befor_code=SERVICE_03_01&code=SERVICE_02_02',
      },
      {
        name: '영등포구 보건소 겨울철 유행감염병',
        address: 'https://www.ydp.go.kr/health/contents.do?key=3659&',
      },
      {
        name: '국민건강보험공단 연령대별 운동 가이드',
        address:
          'https://post.naver.com/viewer/postView.nhn?volumeNo=14334928&memberNo=7076149',
      },
      {
        name: '질병관리청 국가건강정보포털 - 운동',
        address:
          'https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5293',
      },
      {
        name: '대한체육회 연령대별 운동 방법',
        address: 'https://blog.naver.com/sports_7330/221533991269',
      },
    ],
    common: [
      {
        name: '건강보험 웹진 족저근막염',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202101/sub/s02_02.html',
      },
      {
        name: '건강보험 웹진 과음,과식에 현명하게 대처하는 10가지 방법',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/201912/sub/s02_03.html',
      },
      {
        name: '건강보험 웹진 꼭 알아두어야 할 다이어트 상식',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202102/sub/s02_04.html',
      },
      {
        name: '질병관리청 국가건강정보포털 - 주요 비타민의 특징과 섭취방법',
        address:
          'https://health.kdca.go.kr/healthinfo/biz/health/ntcnInfo/mediaRecsroom/imageRecsroom/imageRecsroomView.do',
      },
      {
        name: '건강보험 웹진 알레르기 질환 예방 관리법',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202003/sub/s02_03.html',
      },
      {
        name: '건강보험 웹진 춘곤증',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202003/sub/s02_07.html',
      },
      {
        name: '건강보험 웹진 면역력 높이는 방법',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202211/sub/08.html',
      },
      {
        name: '건강보험 웹진 덥고 따가운 여름 질병',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202307/sub/section2_2.html',
      },
      {
        name: '건강보험 웹진 하지정맥류',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202208/sub/08.html',
      },
      {
        name: '건강보험 웹진 여름철 늘어나는 이명',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202206/sub/08.html',
      },
      {
        name: '건강보험 웹진 가을 건강하고 안전하게 산행하는 법',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202210/sub/08.html',
      },
      {
        name: '건강보험 웹진 고구마',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202210/sub/09.html',
      },
      {
        name: '건강보험 웹진 환절기 건강 수칙',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202310/sub/section2_2.html',
      },
      {
        name: '건강보험 웹진 겨울철 건강 수칙',
        address:
          'https://www.nhis.or.kr/static/alim/paper/oldpaper/202001/sub/s02_03.html',
      },
      {
        name: '영등포구 겨울철 행동 요령',
        address: 'https://www.ydp.go.kr/story/2021/12/1.htm',
      },
      {
        name: '건강보험 웹진 노로바이러스',
        address: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202301/sub/09.html',
      },
    ],
  },
];

export default source;
