import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
    "/avatar",
    EnsureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { usersRoutes };
