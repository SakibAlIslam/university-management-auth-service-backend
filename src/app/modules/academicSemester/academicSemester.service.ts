import httpStatus from 'http-status';
import ApiError from '../../../erorrs/ApiError';
import {
  academicSemesterTitleCodeMapper,
  academicSemesterTitleStartEndMonthsMapper,
} from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (
    academicSemesterTitleCodeMapper[payload.title] !== payload.code ||
    academicSemesterTitleStartEndMonthsMapper[payload.title]?.startMonth !==
      payload?.startMonth ||
    academicSemesterTitleStartEndMonthsMapper[payload.title]?.endMonth !==
      payload?.endMonth
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Invalid Semester Code, provided semester code should be: ${
        academicSemesterTitleCodeMapper[payload.title]
      } and start month should be: ${
        academicSemesterTitleStartEndMonthsMapper[payload.title]?.startMonth
      } and end month should be: ${
        academicSemesterTitleStartEndMonthsMapper[payload.title]?.endMonth
      }`
    );
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemester,
};
