import express from "express";
import * as appController from "../../../controllers/appController";

const router = express.Router();

router.route("/").get(appController.appRoot);

export default router;
