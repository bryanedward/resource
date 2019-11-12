"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _databaseLocal = require("../database/databaseLocal");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Message = _databaseLocal.sequelize.define('messages', {
  idMessage: {
    type: _sequelize["default"].Integer,
    primaryKey: true
  },
  messageUser: {
    type: _sequelize["default"].TEXT
  },
  userId: {
    type: _sequelize["default"].Integer
  },
  publicationId: {
    type: _sequelize["default"].Integer
  }
}, {
  timestamps: false
});

var _default = Message;
exports["default"] = _default;