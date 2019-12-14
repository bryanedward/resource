"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLikes = getLikes;
exports.createLikes = createLikes;
exports.createComplemeint = createComplemeint;

var _LikesModels = _interopRequireDefault(require("../models/LikesModels"));

var _MessagesModels = _interopRequireDefault(require("../models/MessagesModels"));

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

var _ComplemeintModels = _interopRequireDefault(require("../models/ComplemeintModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getLikes(req, res) {
  var allLikes;
  return regeneratorRuntime.async(function getLikes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _LikesModels["default"].belongsTo(_MessagesModels["default"]);

          _LikesModels["default"].belongsTo(_UserModels["default"]);

          _context.next = 4;
          return regeneratorRuntime.awrap(_LikesModels["default"].findAll({
            include: [_MessagesModels["default"], _UserModels["default"]]
          }));

        case 4:
          allLikes = _context.sent;
          res.json({
            allLikes: allLikes
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function createLikes(req, res) {
  var messageId, findLikes, pass, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, variable, dataUpdate, countlike;

  return regeneratorRuntime.async(function createLikes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // TODO: crear el like en la tabla y actualizar la tabla de los mensajes
          messageId = req.body.messageId;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_LikesModels["default"].findAll({
            where: {
              userIduser: req.user.id
            }
          }));

        case 4:
          findLikes = _context2.sent;
          // if (Object.entries(findLikes).length === 0) {
          //   //comrpobar si un objeto esta vacio
          //   await Likes.create({
          //     messageIdmessage : messageId,
          //     userIduser : req.user.id
          //   },{
          //     fields:['messageIdmessage','userIduser']
          //   });
          //   res.json({message:"creado"});
          // }else{
          pass = true;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 9;

          for (_iterator = findLikes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            variable = _step.value;

            if (variable.messageIdmessage == messageId) {
              res.json({
                message: "ya distes like "
              });
              pass = false;
            }
          }

          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](9);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 17:
          _context2.prev = 17;
          _context2.prev = 18;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 20:
          _context2.prev = 20;

          if (!_didIteratorError) {
            _context2.next = 23;
            break;
          }

          throw _iteratorError;

        case 23:
          return _context2.finish(20);

        case 24:
          return _context2.finish(17);

        case 25:
          if (!pass) {
            _context2.next = 35;
            break;
          }

          _context2.next = 28;
          return regeneratorRuntime.awrap(_LikesModels["default"].create({
            messageIdmessage: messageId,
            userIduser: req.user.id
          }, {
            fields: ['messageIdmessage', 'userIduser']
          }));

        case 28:
          _context2.next = 30;
          return regeneratorRuntime.awrap(_MessagesModels["default"].findOne({
            where: {
              idmessage: messageId
            }
          }));

        case 30:
          dataUpdate = _context2.sent;
          countlike = 1 + dataUpdate.likepublication;
          _context2.next = 34;
          return regeneratorRuntime.awrap(_MessagesModels["default"].update({
            likepublication: countlike
          }, {
            where: {
              idmessage: messageId
            }
          }));

        case 34:
          res.json({
            message: "gracias por su like"
          });

        case 35:
          _context2.next = 39;
          break;

        case 37:
          _context2.prev = 37;
          _context2.t1 = _context2["catch"](1);

        case 39:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 37], [9, 13, 17, 25], [18,, 20, 24]]);
}

function createComplemeint(req, res) {
  var complemeintId, passComplemeint, complemeintsAll, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, variable, dataMessage, counts;

  return regeneratorRuntime.async(function createComplemeint$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // TODO: crear la denuncia y actualizar la table de los mensajes
          complemeintId = req.body.complemeintId;
          _context3.prev = 1;
          passComplemeint = true;
          _context3.next = 5;
          return regeneratorRuntime.awrap(_ComplemeintModels["default"].findAll({
            where: {
              userid: req.user.id
            }
          }));

        case 5:
          complemeintsAll = _context3.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context3.prev = 9;

          for (_iterator2 = complemeintsAll[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            variable = _step2.value;

            if (variable.messageid == complemeintId) {
              res.json({
                message: "ya hicistes la denuncia"
              });
              passComplemeint = false;
            }
          }

          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](9);
          _didIteratorError2 = true;
          _iteratorError2 = _context3.t0;

        case 17:
          _context3.prev = 17;
          _context3.prev = 18;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 20:
          _context3.prev = 20;

          if (!_didIteratorError2) {
            _context3.next = 23;
            break;
          }

          throw _iteratorError2;

        case 23:
          return _context3.finish(20);

        case 24:
          return _context3.finish(17);

        case 25:
          if (!passComplemeint) {
            _context3.next = 35;
            break;
          }

          _context3.next = 28;
          return regeneratorRuntime.awrap(_ComplemeintModels["default"].create({
            messageid: complemeintId,
            userid: req.user.id
          }, {
            fields: ['messageid', 'userid']
          }));

        case 28:
          _context3.next = 30;
          return regeneratorRuntime.awrap(_MessagesModels["default"].findOne({
            where: {
              idmessage: complemeintId
            }
          }));

        case 30:
          dataMessage = _context3.sent;
          counts = 1 + dataMessage.complemeints;
          _context3.next = 34;
          return regeneratorRuntime.awrap(_MessagesModels["default"].update({
            complemeints: counts
          }, {
            where: {
              idmessage: complemeintId
            }
          }));

        case 34:
          res.json({
            message: "gracias por su denuncia"
          });

        case 35:
          _context3.next = 39;
          break;

        case 37:
          _context3.prev = 37;
          _context3.t1 = _context3["catch"](1);

        case 39:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 37], [9, 13, 17, 25], [18,, 20, 24]]);
}