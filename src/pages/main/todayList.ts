export interface TodayListType { 
    time: string, 
    todo: string
}
let todayList: TodayListType[] = [
    {
        time: '7:30',
        todo: '물 마시기'
    },
    {
        time: '10:00',
        todo: '스트레칭 하기'
    },
    {
        time: '12:30',
        todo: '점심 먹기'
    },
    {
        time: '19:00',
        todo: '퇴근'
    },
    {
        time: '20:30',
        todo: '저녁 먹기'
    },
]

export default todayList;