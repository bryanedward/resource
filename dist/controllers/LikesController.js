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
  var messageId;
  return regeneratorRuntime.async(function createLikes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          messageId = req.body.messageId;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_LikesModels["default"].create({
            messageIdmessage: messageId,
            userIduser: req.user.id
          }, {
            fields: ['messageIdmessage', 'userIduser']
          }));

        case 3:
          res.json({
            message: "creado el like"
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}