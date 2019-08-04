"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-console */
var _default = function _default(fn) {
  return function (req, res, next) {
    return fn(req, res, next)["catch"](function (err) {
      console.log(err);
      next(err);
    });
  };
};

exports["default"] = _default;