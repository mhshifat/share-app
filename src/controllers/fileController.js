import path from "path";
import catchAsync from "../utils/catchAsync";
import File from "../models/fileModel";

export const downloadFile = catchAsync(async (req, res) => {
  const getFile = await File.findById(req.params.id);
  console.log(getFile);
  res.download(path.join(__dirname, "..", "..", "uploads", getFile.filename));
});
