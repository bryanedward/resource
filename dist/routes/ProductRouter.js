"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Product = require("../controllers/Product.controller");

var router = (0, _express.Router)();
router.post('/', _Product.createProduct);
router.get('/', _Product.getProducts);
router["delete"]('/:id', _Product.deleteProduct);
router.put('/:id', _Product.updateProduct);
router.get('/:id', _Product.getOneProduct);
router.get('/client/:clientid', _Product.getProductByClientid);
var _default = router;
exports["default"] = _default;