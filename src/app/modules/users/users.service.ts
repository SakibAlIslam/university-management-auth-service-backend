import config from '../../../config'
import ApiError from '../../../erorrs/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

//only business logic here
const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  //create user using mongoose create method
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user')
    // throw new Error('Failed to create user')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
