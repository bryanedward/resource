"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../auth/VerifyTokenController");

var _Publication = require("../controllers/Publication.controller");

var router = (0, _express.Router)();
router.get('/home', _Publication.getPublications);
router.post('/create', _VerifyTokenController.authToken, _Publication.createPublication);
router.post('/updatePublication', _Publication.updatePublication);
router.get('/:levelsubject', _Publication.getOnePublication);
router.get('/client/:clientid', _Publication.getPublicationByUserid);
router.get('/user/:clientid', _Publication.getUser);
router.get('/update/:user', _Publication.getUpdate);
router["delete"]('/:id', _Publication.deletePublication);
var _default = router;
exports["default"] = _default;