import express from "express";
import * as appController from "../../../controllers/appController";

const router = express.Router();

router.route("/api").get(appController.appRoot);

export default router;
