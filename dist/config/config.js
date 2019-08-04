"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.mailPass = exports.dbUrl = exports.baseUrl = exports.port = void 0;

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

require("dotenv/config");

var _process$env = process.env,
    PORT = _process$env.PORT,
    BASE_URL = _process$env.BASE_URL,
    MONGODB_URI = _process$env.MONGODB_URI,
    SENDGRID_PASS = _process$env.SENDGRID_PASS;
var port = PORT || 5000;
exports.port = port;
var baseUrl = BASE_URL || "http://localhost:".concat(port);
exports.baseUrl = baseUrl;
var dbUrl = MONGODB_URI;
exports.dbUrl = dbUrl;
var mailPass = SENDGRID_PASS;
exports.mailPass = mailPass;

var storage = _multer["default"].diskStorage({
  destination: function destination(res, file, cb) {
    return cb(null, _path["default"].join(__dirname, "..", "..", "uploads"));
  },
  filename: function filename(res, file, cb) {
    return cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});

exports.storage = storage;