import express from "express";
import * as shareController from "../../../controllers/shareController";
import { uploadFile } from "../../../middlewares/shareMiddlewares";

const router = express.Router();

router.route("/").post(uploadFile.array("files"), shareController.createShare);

router.route("/download/:id").get(shareController.downloadFiles);

export default router;
