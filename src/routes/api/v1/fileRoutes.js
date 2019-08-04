import express from "express";
import * as fileController from "../../../controllers/fileController";

const router = express.Router();

router.route("/download/:id").get(fileController.downloadFile);

export default router;
