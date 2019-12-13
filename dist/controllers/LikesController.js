"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLikes = getLikes;
exports.createLikes = createLikes;

var _LikesModels = _interopRequireDefault(require("../models/LikesModels"));

var _MessagesModels = _interopRequireDefault(require("../models/MessagesModels"));

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

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
                message: "no se puede"
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
            message: "actualizado y creado el like"
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