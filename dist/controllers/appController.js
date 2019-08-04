"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app404 = exports.appRoot = void 0;

var _appError = _interopRequireDefault(require("../utils/appError"));

var appRoot = function appRoot(req, res) {
  res.status(200).json({
    app: "SHARE",
    version: "1.0.0"
  });
};

exports.appRoot = appRoot;

var app404 = function app404(req, res, next) {
  return next(new _appError["default"]("Route has not been added yet!", 404));
};

exports.app404 = app404;