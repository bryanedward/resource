"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _ProductModels = _interopRequireDefault(require("./ProductModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Client = _database.sequelize.define('client', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  phone: {
    type: _sequelize["default"].INTEGER
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  city: {
    type: _sequelize["default"].TEXT
  },
  urlimg: {
    type: _sequelize["default"].TEXT
  },
  pass: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

Client.hasMany(_ProductModels["default"], {
  foreingKey: 'clientid',
  sourceKey: 'id'
});

_ProductModels["default"].belongsTo(Client, {
  foreingKey: 'clientid',
  sourceKey: 'id'
});

var _default = Client;
exports["default"] = _default;