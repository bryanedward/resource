"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authToken = authToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function authToken(req, res, next) {
  var token, verified;
  return regeneratorRuntime.async(function authToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // TODO: obtener el token por el header
          token = req.header('auto-token'); // TODO: si no hay token el acceso es denegado

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.json('acceso denegado'));

        case 3:
          try {
            // TODO: comparar el token
            verified = _jsonwebtoken["default"].verify(token, _config["default"].SECRET_TOKEN);
            req.user = verified;
            next();
          } catch (error) {
            res.json('el token es invalido');
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}