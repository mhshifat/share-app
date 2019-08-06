"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appRoot = void 0;

var appRoot = function appRoot(req, res) {
  res.status(200).json({
    app: "SHARE",
    version: "1.0.0"
  });
};

exports.appRoot = appRoot;