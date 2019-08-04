"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalMiddleware = void 0;

var globalMiddleware = function globalMiddleware(err, req, res, next) {
  if (!err) next();
  res.status(err.statusCode).json({
    success: false,
    errors: [err.message]
  });
};

exports.globalMiddleware = globalMiddleware;