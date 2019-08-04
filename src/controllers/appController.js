import AppError from "../utils/appError";

export const appRoot = (req, res) => {
  res.status(200).json({
    app: "SHARE",
    version: "1.0.0"
  });
};

export const app404 = (req, res, next) =>
  next(new AppError("Route has not been added yet!", 404));
