"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShare = exports.downloadFiles = exports.createShare = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _archiver = _interopRequireDefault(require("archiver"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

var _fileModel = _interopRequireDefault(require("../models/fileModel"));

var _shareModel = _interopRequireDefault(require("../models/shareModel"));

var _config = require("../config/config");

var _testEmailTemplate = _interopRequireDefault(require("../utils/templates/testEmailTemplate"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createShare = (0, _catchAsync["default"])(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var session;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _mongoose["default"].startSession();

          case 2:
            session = _context2.sent;
            _context2.next = 5;
            return session.withTransaction(
            /*#__PURE__*/
            (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/
            _regenerator["default"].mark(function _callee() {
              var createdShares, files, createdFiles, transporter, info;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _shareModel["default"].create([req.body], {
                        session: session
                      });

                    case 2:
                      createdShares = _context.sent;
                      files = req.files.map(function (f) {
                        return _objectSpread({}, f, {
                          share: createdShares[0].id
                        });
                      });
                      _context.next = 6;
                      return _fileModel["default"].create(files, {
                        session: session
                      });

                    case 6:
                      createdFiles = _context.sent;
                      // eslint-disable-next-line no-restricted-syntax
                      createdFiles.forEach(function (file) {
                        return createdShares[0].files.push(file.id);
                      });
                      _context.next = 10;
                      return createdShares[0].save({
                        session: session
                      });

                    case 10:
                      transporter = _nodemailer["default"].createTransport({
                        host: "smtp.sendgrid.net",
                        port: 587,
                        secure: false,
                        auth: {
                          user: "apikey",
                          pass: _config.mailPass
                        }
                      });
                      _context.next = 13;
                      return transporter.sendMail({
                        from: req.body.from,
                        to: req.body.to,
                        subject: "[ SHARE ] File Download Invitition",
                        text: req.body.message,
                        html: (0, _testEmailTemplate["default"])("".concat(_config.baseUrl, "/download/").concat(createdShares[0].id))
                      });

                    case 13:
                      info = _context.sent;
                      _context.next = 16;
                      return transporter.sendMail(info);

                    case 16:
                      res.status(200).json({
                        success: true,
                        files: createdFiles,
                        docs: createdShares[0]
                      });

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.createShare = createShare;
var downloadFiles = (0, _catchAsync["default"])(
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var zip, getShare;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            zip = (0, _archiver["default"])("zip");
            _context3.next = 3;
            return _shareModel["default"].findById(req.params.id).populate("files");

          case 3:
            getShare = _context3.sent;
            getShare.files.forEach(function (file) {
              zip.file(_path["default"].join(__dirname, "..", "..", "uploads", "".concat(file.filename)), {
                name: file.originalname
              });
            });
            zip.finalize();
            res.attachment("download.zip");
            zip.pipe(res);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());
exports.downloadFiles = downloadFiles;
var getShare = (0, _catchAsync["default"])(
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var getShareainfo;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _shareModel["default"].findById(req.params.id).populate("files");

          case 2:
            getShareainfo = _context4.sent;
            res.status(200).json({
              success: true,
              share: getShareainfo
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}());
exports.getShare = getShare;