export const globalMiddleware = (err, req, res, next) => {
  if (!err) next();
  res.status(err.statusCode).json({
    success: false,
    errors: [err.message]
  });
};
