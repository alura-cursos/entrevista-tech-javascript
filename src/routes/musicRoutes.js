import express from "express";
import MusicController from "../controllers/musicController.js";

const routes = express.Router();

routes.get("/music", MusicController.getMusic);
routes.get("/music/:id", MusicController.getMusicById);

export default routes;
