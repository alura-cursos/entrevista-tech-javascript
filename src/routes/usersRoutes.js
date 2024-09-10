import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.getUsers);
routes.get("/users/:id", UserController.getUserById);
routes.get("/users/:id/songs", UserController.getSongsByUser);

export default routes;
