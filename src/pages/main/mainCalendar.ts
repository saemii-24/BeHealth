export interface MainCalendarType { 
    day: string, 
    date: string, 
    today: boolean 
}
let mainCalendar: MainCalendarType[] = [
    {
        day: 'Su',
        date: '01',
        today: false,
    },
    {
        day: 'Mo',
        date: '02',
        today: false,
    },
    {
        day: 'Tu',
        date: '03',
        today: false,
    },
    {
        day: 'We',
        date: '04',
        today: true,
    },
    {
        day: 'Tu',
        date: '05',
        today: false,
    },
    {
        day: 'Fr',
        date: '06',
        today: false,
    },
    {
        day: 'Sa',
        date: '07',
        today: false,
    },
]

export default mainCalendar;