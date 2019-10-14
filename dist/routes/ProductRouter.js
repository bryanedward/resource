"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VerifyTokenController = require("../controllers/VerifyTokenController");

var _Product = require("../controllers/Product.controller");

var router = (0, _express.Router)();
router.post('/', _Product.createProduct);
router.get('/', _VerifyTokenController.authToken, _Product.getProducts);
router.get('/token', _VerifyTokenController.authToken, _Product.newToken);
router.get('/:id', _Product.getOneProduct);
router.get('/client/:clientid', _Product.getProductByClientid);
router.get('/user/:clientid', _Product.getUser);
router.get('/data/user', _Product.getUserDouble);
router.get('/update/:user', _Product.getUpdate);
router["delete"]('/:id', _Product.deleteProduct);
router.put('/:id', _Product.updateProduct);
var _default = router;
exports["default"] = _default;