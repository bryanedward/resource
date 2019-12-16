"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessagePublications = getMessagePublications;
exports.postMessagesPublications = postMessagesPublications;
exports.deleteMessagePublications = deleteMessagePublications;
exports.updateMessagePublications = updateMessagePublications;

var _MessagesModels = _interopRequireDefault(require("../models/MessagesModels"));

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

var _LikesModels = _interopRequireDefault(require("../models/LikesModels"));

var _ComplemeintModels = _interopRequireDefault(require("../models/ComplemeintModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getMessagePublications(req, res) {
  var idpublication, messages;
  return regeneratorRuntime.async(function getMessagePublications$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          idpublication = req.params.idpublication; // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos

          _MessagesModels["default"].belongsTo(_UserModels["default"]);

          _context.next = 4;
          return regeneratorRuntime.awrap(_MessagesModels["default"].findAll({
            include: [_UserModels["default"]],
            order: [['idmessage', 'DESC']],
            where: {
              'publicationid': idpublication
            }
          }));

        case 4:
          messages = _context.sent;
          res.json({
            messages: messages
          });

        case 6:
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
            userIduser: req.user.id,
            publicationid: messageid,
            likepublication: 0,
            complemeints: 0
          }, {
            fields: ['messageuser', 'userIduser', 'publicationid', 'likepublication', 'complemeints']
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
  var idmessage, deleteRowCount;
  return regeneratorRuntime.async(function deleteMessagePublications$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          idmessage = req.params.idmessage;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_LikesModels["default"].destroy({
            where: {
              messageIdmessage: idmessage
            }
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(_ComplemeintModels["default"].destroy({
            where: {
              messageid: idmessage
            }
          }));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(_MessagesModels["default"].destroy({
            where: {
              idmessage: idmessage
            }
          }));

        case 8:
          deleteRowCount = _context3.sent;
          res.json({
            message: "elimnado"
          });
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function updateMessagePublications(req, res) {
  var _req$body2, idmessage, likePublication;

  return regeneratorRuntime.async(function updateMessagePublications$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, idmessage = _req$body2.idmessage, likePublication = _req$body2.likePublication;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_MessagesModels["default"].update({
            likepublication: likePublication
          }, {
            where: {
              idmessage: idmessage
            }
          }));

        case 4:
          res.json("actualizado");
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}