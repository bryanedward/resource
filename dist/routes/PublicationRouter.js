"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../controllers/VerifyTokenController");

var _Publication = require("../controllers/Publication.controller");

var router = (0, _express.Router)();
router.post('/', _Publication.createPublication);
router.get('/', _VerifyTokenController.authToken, _Publication.getPublications);
router.get('/token', _VerifyTokenController.authToken, _Publication.newToken);
router.get('/:id', _Publication.getOnePublication);
router.get('/client/:clientid', _Publication.getPublicationByUserid);
router.get('/user/:clientid', _Publication.getUser);
router.get('/data/user', _Publication.getUserDouble);
router.get('/update/:user', _Publication.getUpdate);
router["delete"]('/:id', _Publication.deletePublication);
router.put('/:id', _Publication.updatePublication);
var _default = router;
exports["default"] = _default;