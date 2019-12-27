"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../auth/VerifyTokenController");

var _LikesController = require("../controllers/LikesController");

var router = (0, _express.Router)();
router.get('/getLikes', _LikesController.getLikes);
router.post('/createLikes', _VerifyTokenController.authToken, _LikesController.createLikes);
router.post('/create/createComplemeints', _VerifyTokenController.authToken, _LikesController.createComplemeint);
router.get('/getAllComplemeint', _LikesController.getComplemeint);
var _default = router;
exports["default"] = _default;