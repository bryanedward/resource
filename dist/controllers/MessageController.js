"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessagePublications = getMessagePublications;

var _MessagesModels = _interopRequireDefault(require("../models/MessagesModels"));

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getMessagePublications(req, res) {
  var idpublication, messages;
  return regeneratorRuntime.async(function getMessagePublications$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idpublication = req.params.idpublication; // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos

          _context.next = 3;
          return regeneratorRuntime.awrap(_MessagesModels["default"].findAll({
            attributes: ['messageuser'],
            where: {
              publicationid: idpublication
            }
          }));

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
  });
}

;