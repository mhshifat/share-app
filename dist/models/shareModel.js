"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var shareSchema = new _mongoose["default"].Schema({
  to: {
    type: String,
    required: [true, "Reciever email is required!"],
    trim: true
  },
  from: {
    type: String,
    required: [true, "Sender email is required!"],
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  files: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "File"
  }]
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("Share", shareSchema);

exports["default"] = _default;