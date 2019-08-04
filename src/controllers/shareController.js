import path from "path";
import mongoose from "mongoose";
import archiver from "archiver";
import nodemailer from "nodemailer";
import catchAsync from "../utils/catchAsync";
import File from "../models/fileModel";
import Share from "../models/shareModel";
import { mailPass, baseUrl } from "../config/config";
import testEmailTemplate from "../utils/templates/testEmailTemplate";

export const createShare = catchAsync(async (req, res) => {
  const session = await mongoose.startSession();
  await session.withTransaction(async () => {
    const createdShares = await Share.create([req.body], { session });
    const files = req.files.map(f => ({ ...f, share: createdShares[0].id }));
    const createdFiles = await File.create(files, { session });
    // eslint-disable-next-line no-restricted-syntax
    createdFiles.forEach(file => createdShares[0].files.push(file.id));
    await createdShares[0].save({ session });

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: "apikey",
        pass: mailPass
      }
    });

    const info = await transporter.sendMail({
      from: req.body.from,
      to: req.body.to,
      subject: "[ SHARE ] File Download Invitition",
      text: req.body.message,
      html: testEmailTemplate(
        `${baseUrl}/api/v1/shares/download/${createdShares[0].id}`
      )
    });

    await transporter.sendMail(info);

    res.status(200).json({
      success: true,
      files: createdFiles,
      docs: createdShares[0]
    });
  });
});

export const downloadFiles = catchAsync(async (req, res) => {
  const zip = archiver("zip");
  const getShare = await Share.findById(req.params.id).populate("files");
  getShare.files.forEach(file => {
    zip.file(path.join(__dirname, "..", "..", "uploads", `${file.filename}`), {
      name: file.originalname
    });
  });
  zip.finalize();
  res.attachment("download.zip");
  zip.pipe(res);
});
