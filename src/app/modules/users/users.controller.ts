import { RequestHandler } from 'express';
import { UserService } from './users.service';

const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
    // res.status(400).json({
    //   error: error
    // })
  }
};

export const UserController = {
  createUserController,
};
