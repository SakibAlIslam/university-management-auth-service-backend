import { Model } from 'mongoose';

export type ISemesterMonth = {
  startMonth: string;
  endMonth: string;
};

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCodes = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcademicSemesterTitles;
  year: number;
  code: IAcademicSemesterCodes;
  startMonth: Month;
  endMonth: Month;
};

// Create a new Model type that knows about IUserMethods...
export type AcademicSemesterModel = Model<IAcademicSemester>;
