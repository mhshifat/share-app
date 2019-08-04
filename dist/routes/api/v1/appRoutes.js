"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var appController = _interopRequireWildcard(require("../../../controllers/appController"));

var router = _express["default"].Router();

router.route("/").get(appController.appRoot);
router.route("*").get(appController.app404);
var _default = router;
exports["default"] = _default;