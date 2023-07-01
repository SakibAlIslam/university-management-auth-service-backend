import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResonpose from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );
    next();

    sendResonpose(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created Successfully',
      data: result,
    });
  }
);

export const academicSemesterController = {
  createAcademicSemesterController,
};
