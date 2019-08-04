"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var fileSchema = new _mongoose["default"].Schema({
  originalname: {
    type: String,
    required: true,
    trim: true
  },
  filename: {
    type: String,
    required: true,
    trim: true
  },
  mimetype: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true,
    trim: true
  },
  share: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Share"
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("File", fileSchema);

exports["default"] = _default;