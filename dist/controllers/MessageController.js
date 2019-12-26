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
          console.log(idmessage);
          _context3.next = 5;
          return regeneratorRuntime.awrap(_LikesModels["default"].destroy({
            where: {
              messageIdmessage: idmessage
            }
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(_ComplemeintModels["default"].destroy({
            where: {
              messageid: idmessage
            }
          }));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(_MessagesModels["default"].destroy({
            where: {
              idmessage: idmessage
            }
          }));

        case 9:
          deleteRowCount = _context3.sent;
          res.json({
            message: "elimnado"
          });
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

function updateMessagePublications(req, res) {
  var _req$body2, idmessage, messageuser;

  return regeneratorRuntime.async(function updateMessagePublications$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, idmessage = _req$body2.idmessage, messageuser = _req$body2.messageuser;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_MessagesModels["default"].update({
            messageuser: messageuser
          }, {
            where: {
              idmessage: idmessage
            }
          }));

        case 4:
          res.json({
            message: "comentario actualizado"
          });
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