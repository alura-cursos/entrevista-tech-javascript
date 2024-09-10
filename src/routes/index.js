import express from "express";
import music from "./musicRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Rota inicial"));
  app.use(express.json(), music, users);
};

export default routes;