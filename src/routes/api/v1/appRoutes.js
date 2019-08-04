import express from "express";
import * as appController from "../../../controllers/appController";

const router = express.Router();

router.route("/").get(appController.appRoot);
router.route("*").get(appController.app404);

export default router;
