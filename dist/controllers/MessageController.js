"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessagePublications = getMessagePublications;
exports.postMessagesPublications = postMessagesPublications;
exports.deleteMessagePublications = deleteMessagePublications;

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
            attributes: ['idmessage', 'messageuser', 'userid', 'publicationid'],
            order: [['idmessage', 'DESC']],
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

function postMessagesPublications(req, res) {
  var _req$body, messageuser, messageid;

  return regeneratorRuntime.async(function postMessagesPublications$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //se obtiene el token para asignar el id del usuario y los parametros para la creacion de
          //del nuevo mensaje
          _req$body = req.body, messageuser = _req$body.messageuser, messageid = _req$body.messageid;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_MessagesModels["default"].create({
            messageuser: messageuser,
            userid: req.user.id,
            publicationid: messageid
          }, {
            fields: ['messageuser', 'userid', 'publicationid']
          }));

        case 3:
          res.json({
            message: 'mensaje creado'
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function deleteMessagePublications(req, res) {
  return regeneratorRuntime.async(function deleteMessagePublications$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
}