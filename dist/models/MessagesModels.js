"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _databaseLocal = require("../database/databaseLocal");

var _PublicationModels = _interopRequireDefault(require("./PublicationModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Message = _databaseLocal.sequelize.define('messages', {
  idmessage: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  messageuser: {
    type: _sequelize["default"].TEXT
  },
  userid: {
    type: _sequelize["default"].INTEGER
  },
  publicationid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //Message.hasMany(Publication,{foreingKey:'idmessage', sourceKey:'idmessage'});
//Message.belongsTo(Publication, {targetKey:'publicationid', sourceKey:'idmessage' });


var _default = Message;
exports["default"] = _default;