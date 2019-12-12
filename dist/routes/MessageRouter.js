"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../auth/VerifyTokenController");

var _MessageController = require("../controllers/MessageController");

var router = (0, _express.Router)();
router.get('/:idpublication', _MessageController.getMessagePublications);
router.post('/create', _VerifyTokenController.authToken, _MessageController.postMessagesPublications);
router["delete"]('/:idmessage', _MessageController.deleteMessagePublications);
router.post('/update', _MessageController.updateMessagePublications);
var _default = router;
exports["default"] = _default;