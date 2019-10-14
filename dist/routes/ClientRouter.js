"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _Client = require("../controllers/Client.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multipartMiddleware = (0, _connectMultiparty["default"])({
  uploadDir: './src/photos'
});
var router = (0, _express.Router)();
router.post('/create', multipartMiddleware, _Client.createClient);
router.get('/', _Client.getClients);
router.get('/image', _Client.getImage);
router.get('/:email', _Client.getOneClient);
router.get('/email/login', _Client.login);
router["delete"]('/:id', _Client.deleteClient);
router.put('/:id', _Client.updateClient);
router.put('/update/:email', _Client.authToken);
var _default = router;
exports["default"] = _default;