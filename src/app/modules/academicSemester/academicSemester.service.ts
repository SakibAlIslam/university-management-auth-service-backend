import httpStatus from 'http-status';
import ApiError from '../../../erorrs/ApiError';
import {
  academicSemesterTitleCodeMapper,
  academicSemesterTitleStartEndMonthsMapper,
} from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { IPaginationOptions } from '../../../interfaces/IPaginationOptions';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../shared/helper/paginationHelper';
import { SortOrder } from 'mongoose';

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

const getAllSemesters = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllSemesters,
};
