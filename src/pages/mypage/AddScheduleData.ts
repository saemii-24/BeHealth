export interface AddScheduleType {
  scheduleIndex: number;
  scheduleTitle: string;
  scheduleSummary: string;
  scheduleIcon: string;
  scheduleIconColor: string;
  type: string;
}

export const addScheduleData: AddScheduleType[] = [
  {
    scheduleIndex: 0,
    scheduleTitle: '예상 월경일 알아보기',
    scheduleSummary: '예상 월경일을 계산해드려요.',
    scheduleIcon: 'menstruation',
    scheduleIconColor: '#FD4E53',
    type: 'Menstruation',
  },
  {
    scheduleIndex: 1,
    scheduleTitle: '병원 예약 등록하기',
    scheduleSummary: '병원 방문을 잊지 않도록, 알람을 보내드려요.',
    scheduleIcon: 'hospital',
    scheduleIconColor: '#2F6BE2',
    type: 'hospital',
  },
  {
    scheduleIndex: 2,
    scheduleTitle: '의약품 복용 시간 등록하기',
    scheduleSummary: '복용 시간이 되면, 알람을 보내드려요.',
    scheduleIcon: 'medicine',
    scheduleIconColor: '#ABDB98',
    type: 'medicine',
  },
  {
    scheduleIndex: 3,
    scheduleTitle: '운동 계획 등록하기',
    scheduleSummary: '운동 계획을 세우고, 일정에 등록해보세요.',
    scheduleIcon: 'exercise',
    scheduleIconColor: '#FBCD29',
    type: 'exercise',
  },
  {
    scheduleIndex: 4,
    scheduleTitle: '기타 일정 등록하기',
    scheduleSummary: '원하는 일정을 등록하세요.',
    scheduleIcon: 'etc',
    scheduleIconColor: '#A07EFF',
    type: 'etc',
  },
];
