export interface TodayListType { 
    time: string, 
    todo: string,
    today: boolean 
}
let todayList: TodayListType[] = [
    {
        time: '7:30',
        todo: '물 마시기',
        today: false,
    },
    {
        time: '10:00',
        todo: '스트레칭 하기',
        today: true,
    },
    {
        time: '12:30',
        todo: '점심 먹기',
        today: false,
    },
    {
        time: '19:00',
        todo: '퇴근',
        today: false,
    },
    {
        time: '20:30',
        todo: '저녁 먹기',
        today: false,
    },
]

export default todayList;