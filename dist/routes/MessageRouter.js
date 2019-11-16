"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../auth/VerifyTokenController");

var _MessageController = require("../controllers/MessageController");

var router = (0, _express.Router)();
router.get('/:idpublication', _VerifyTokenController.authToken, _MessageController.getMessagePublications);
var _default = router;
exports["default"] = _default;