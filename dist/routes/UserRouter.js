"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _User = require("../controllers/User.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multipartMiddleware = (0, _connectMultiparty["default"])({
  uploadDir: './src/photos'
});
var router = (0, _express.Router)();
router.post('/create', multipartMiddleware, _User.createUser);
router.get('/', _User.getUsers);
router.get('/image/:photoUser', _User.getImage);
router.get('/:email', _User.getOneUser);
router.post('/email/emailUser', _User.login);
router["delete"]('/:id', _User.deleteUser);
router.put('/:id', _User.updateUser);
router.put('/update/:email', _User.authToken);
var _default = router;
exports["default"] = _default;