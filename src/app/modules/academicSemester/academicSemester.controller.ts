import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResonpose from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IPaginationOptions } from '../../../interfaces/IPaginationOptions';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination.constants';
import { IAcademicSemester } from './academicSemester.interface';

const createAcademicSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    sendResonpose(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created Successfully',
      data: result,
    });
    next();
  }
);

const getAllSemestersController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions: IPaginationOptions = pick(
      req.query,
      paginationFields
    );

    const result = await AcademicSemesterService.getAllSemesters(
      paginationOptions
    );

    sendResonpose<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is retrived Successfully',
      meta: result?.meta,
      data: result?.data,
    });
    next();
  }
);

export const academicSemesterController = {
  createAcademicSemesterController,
  getAllSemestersController,
};
