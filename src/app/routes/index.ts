import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];
moduleRoutes.forEach(eachRoute => router.use(eachRoute.path, eachRoute.route));

export default router;
