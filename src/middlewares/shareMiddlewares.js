import multer from "multer";
import { storage } from "../config/config";

export const uploadFile = multer({ storage });
