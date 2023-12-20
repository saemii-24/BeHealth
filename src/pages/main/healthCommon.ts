export interface HealthType {
  title: string;
  content: string;
  img: string;
  imgColor: string;
}

let healthCommon: HealthType[] = [
  {
    title: '기립성 저혈압',
    content: '앉았다 일어나니 눈 앞이 깜깜',
    img: '/images/orthostatic_hypotension.jpg',
    imgColor: 'light',
  },
  {
    title: '토마토🍅',
    content: '레드푸드의 선두주자',
    img: '/images/tomato.jpg',
    imgColor: 'dark',
  },
  {
    title: '정말 눈이 나빠질까?',
    content: '어두운 곳에서 책을 보면',
    img: '/images/book.jpg',
    imgColor: 'dark',
  },
  {
    title: '비타민 기초 상식',
    content: '알고 먹으면 더 좋은',
    img: '/images/vitamin.jpg',
    imgColor: 'light',
  },
];

export default healthCommon;
