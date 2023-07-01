import {
  IAcademicSemesterCodes,
  IAcademicSemesterTitles,
  ISemesterMonth,
  Month,
} from './academicSemester.interface';

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];
export const academicSemesterMonths: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterTitleStartEndMonthsMapper: {
  [key: string]: ISemesterMonth;
} = {
  Autumn: {
    startMonth: 'January',
    endMonth: 'April',
  },
  Summer: {
    startMonth: 'May',
    endMonth: 'August',
  },
  Fall: {
    startMonth: 'September',
    endMonth: 'December',
  },
};
