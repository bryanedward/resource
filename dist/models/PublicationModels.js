"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _databaseLocal = require("../database/databaseLocal");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Publication = _databaseLocal.sequelize.define('publications', {
  idpublication: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  namepublication: {
    type: _sequelize["default"].TEXT
  },
  descriptpublication: {
    type: _sequelize["default"].TEXT
  },
  levelsubject: {
    type: _sequelize["default"].INTEGER
  },
  userid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Publication;
exports["default"] = _default;