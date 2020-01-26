"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _VerifyTokenController = require("../auth/VerifyTokenController");

var _Publication = require("../controllers/Publication.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multipartMiddleware = (0, _connectMultiparty["default"])({
  uploadDir: './src/publications'
});
var router = (0, _express.Router)();
router.get('/home', _Publication.getPublications);
router.post('/create', _VerifyTokenController.authToken, multipartMiddleware, _Publication.createPublication);
router.post('/updatePublication', _Publication.updatePublication);
router.get('/:levelsubject', _Publication.getOnePublication);
router.get('/image/:photopublt', _Publication.getImage);
router.get('/client/:clientid', _Publication.getPublicationByUserid);
router.get('/user/:clientid', _Publication.getUser);
router.get('/update/:user', _Publication.getUpdate);
router["delete"]('/:id', _Publication.deletePublication);
var _default = router;
exports["default"] = _default;