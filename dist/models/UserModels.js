"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _PublicationModels = _interopRequireDefault(require("./PublicationModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database.sequelize.define('users', {
  iduser: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nameuser: {
    type: _sequelize["default"].TEXT
  },
  emailuser: {
    type: _sequelize["default"].TEXT
  },
  passuser: {
    type: _sequelize["default"].TEXT
  },
  roleuser: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

User.hasMany(_PublicationModels["default"], {
  foreingKey: 'userid',
  sourceKey: 'iduser'
}); // TODO: el foreingKey hace relacion con la llave foranea del modelo publicacion
// TODO: y ek sourceKey hace referencia al id de la clase modelo idUser

_PublicationModels["default"].belongsTo(User, {
  foreingKey: 'userid',
  sourceKey: 'iduser'
});

var _default = User;
exports["default"] = _default;