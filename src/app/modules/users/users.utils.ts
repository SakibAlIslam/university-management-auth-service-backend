import { User } from './users.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastUser?.id;
};

export const generateUserId = async () => {
  //if first time the a new ID will create, and if any ID in database then store it to currentId
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementalId;
};
