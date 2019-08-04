"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var shareController = _interopRequireWildcard(require("../../../controllers/shareController"));

var _shareMiddlewares = require("../../../middlewares/shareMiddlewares");

var router = _express["default"].Router();

router.route("/").post(_shareMiddlewares.uploadFile.array("files"), shareController.createShare);
router.route("/download/:id").get(shareController.downloadFiles);
var _default = router;
exports["default"] = _default;