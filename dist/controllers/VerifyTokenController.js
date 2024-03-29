"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authToken = authToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function authToken(_x, _x2, _x3) {
  return _authToken.apply(this, arguments);
}

function _authToken() {
  _authToken = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, verified;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.header('auto-token');

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.json('access denied'));

          case 3:
            try {
              verified = _jsonwebtoken["default"].verify(token, process.env.SECRET_TOKEN);
              req.user = verified;
              next();
            } catch (error) {
              res.json('error');
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _authToken.apply(this, arguments);
}