import { NextFunction, Request, Response } from 'express'
import usersService from './users.service'

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
    // res.status(400).json({
    //   error: error
    // })
  }
}

export default {
  createUserController,
}
