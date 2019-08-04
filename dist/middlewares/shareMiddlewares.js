"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _config = require("../config/config");

var uploadFile = (0, _multer["default"])({
  storage: _config.storage
});
exports.uploadFile = uploadFile;