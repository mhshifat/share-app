"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config/config");

/* eslint-disable no-console */
var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(_config.dbUrl, {
            useNewUrlParser: true,
            useCreateIndex: false,
            useFindAndModify: false
          }, function () {
            console.log("[ SHARE ] >>>>> Database connection has been established!");
          });

        case 3:
          _context.next = 9;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          console.error("[ SHARE ] >>>>> Database connection failed!");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 5]]);
}));

exports["default"] = _default;