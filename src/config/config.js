import path from "path";
import multer from "multer";
import "dotenv/config";

const { PORT, BASE_URL, MONGODB_URI, SENDGRID_PASS, CLIENT_URL } = process.env;

export const port = PORT || 5000;
export const baseUrl = BASE_URL || `http://localhost:${port}`;
export const clientUrl = CLIENT_URL || "http://localhost:3000";
export const dbUrl = MONGODB_URI;
export const mailPass = SENDGRID_PASS;
export const storage = multer.diskStorage({
  destination: (res, file, cb) =>
    cb(null, path.join(__dirname, "..", "..", "uploads")),
  filename: (res, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
