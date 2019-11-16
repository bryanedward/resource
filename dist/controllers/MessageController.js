"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessagePublications = getMessagePublications;

var _MessagesModels = _interopRequireDefault(require("../models/MessagesModels"));

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMessagePublications(_x, _x2) {
  return _getMessagePublications.apply(this, arguments);
}

function _getMessagePublications() {
  _getMessagePublications = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var idpublication, messages;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idpublication = req.params.idpublication; // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos

            _context.next = 3;
            return _MessagesModels["default"].findAll({
              attributes: ['messageuser'],
              where: {
                publicationid: idpublication
              }
            });

          case 3:
            messages = _context.sent;
            res.json({
              messages: messages
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMessagePublications.apply(this, arguments);
}

;