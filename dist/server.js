"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _conn = _interopRequireDefault(require("./database/conn"));

var _config = require("./config/config");

var _appMiddlewares = require("./middlewares/appMiddlewares");

var _appRoutes = _interopRequireDefault(require("./routes/api/v1/appRoutes"));

var _shareRoutes = _interopRequireDefault(require("./routes/api/v1/shareRoutes"));

var _fileRoutes = _interopRequireDefault(require("./routes/api/v1/fileRoutes"));

/* eslint-disable no-console */
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api/v1/files", _fileRoutes["default"]);
app.use("/api/v1/shares", _shareRoutes["default"]);
app.use("/", _appRoutes["default"]);
app.use(_appMiddlewares.globalMiddleware);
(0, _conn["default"])().then(function () {
  app.listen(_config.port, function () {
    // eslint-disable-next-line indent
    console.log("[ SHARE ] >>>>> The server is running on ".concat(_config.baseUrl, "!"));
  });
});