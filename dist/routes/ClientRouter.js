"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Client = require("../controllers/Client.controller");

var router = (0, _express.Router)();
//router.post('/', createClients);
router.post('/client', _Client.updatemethod);
router.get('/', _Client.getClients);
router.get('/:email', _Client.getOneClient);
router["delete"]('/:id', _Client.deleteClient);
router.put('/:id', _Client.updateClient);
var _default = router;
exports["default"] = _default;