"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = require("../database/database");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Product = _database.sequelize.define('product', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nameproduct: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  clientid: {
    type: _sequelize["default"].INTEGER
  },
  urlimg: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Product;
exports["default"] = _default;