export interface AddScheduleType {
  scheduleIndex: number;
  scheduleTitle: string;
  scheduleSummary: string;
  scheduleIcon: string;
  scheduleIconColor: string;
  notAvailable: string;
  type: string;
}

export const addScheduleData: AddScheduleType[] = [
  {
    scheduleIndex: 0,
    scheduleTitle: '병원 예약 등록하기',
    scheduleSummary: '병원 방문을 잊지 않도록, 알람을 보내드려요.',
    scheduleIcon: 'hospital',
    scheduleIconColor: '#2F6BE2',
    notAvailable: '로그인하고 병원 방문 시간을 기록하세요.',
    type: 'hospital',
  },
  {
    scheduleIndex: 1,
    scheduleTitle: '의약품 복용 시간 등록하기',
    scheduleSummary: '복용 시간이 되면, 알람을 보내드려요.',
    scheduleIcon: 'medicine',
    scheduleIconColor: '#ABDB98',
    notAvailable: '로그인하고 복용시간을 기록하세요.',
    type: 'medicine',
  },
  {
    scheduleIndex: 2,
    scheduleTitle: '운동 계획 등록하기',
    scheduleSummary: '운동 계획을 세우고, 일정에 등록해보세요.',
    scheduleIcon: 'exercise',
    scheduleIconColor: '#FBCD29',
    notAvailable: '로그인하고 운동 계획을 등록하세요.',
    type: 'exercise',
  },
  {
    scheduleIndex: 3,
    scheduleTitle: '기타 일정 등록하기',
    scheduleSummary: '원하는 일정을 등록하세요.',
    scheduleIcon: 'etc',
    scheduleIconColor: '#A07EFF',
    notAvailable: '원하는 일정을 등록하세요.',
    type: 'etc',
  },
];
