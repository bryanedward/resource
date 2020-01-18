"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _databaseLocal = require("../database/databaseLocal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Points = _databaseLocal.sequelize.define('points', {
  iduser: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  pointlimit: {
    type: _sequelize["default"].INTEGER
  },
  cantpoint: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Points;
exports["default"] = _default;