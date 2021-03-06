import express from 'express';
import routes from '../routes';
import {
  users,
  uerDetail,
  editProfile,
  changePassword
} from '../controllers/userController';

const userRouter = express.Router();
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetial(), uerDetail);

export default userRouter;
