"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getOneProduct = getOneProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getProductByClientid = getProductByClientid;
exports.getUser = getUser;
exports.getUserDouble = getUserDouble;

var _ProductModels = _interopRequireDefault(require("../models/ProductModels"));

var _ClientModels = _interopRequireDefault(require("../models/ClientModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createProduct(_x, _x2) {
  return _createProduct.apply(this, arguments);
}

function _createProduct() {
  _createProduct = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nameproduct, description, clientid, urlimg;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //CREAR UN PRODUCTO
            _req$body = req.body, nameproduct = _req$body.nameproduct, description = _req$body.description, clientid = _req$body.clientid, urlimg = _req$body.urlimg;
            _context.next = 3;
            return _ProductModels["default"].create({
              nameproduct: nameproduct,
              description: description,
              clientid: clientid,
              urlimg: urlimg
            }, {
              fields: ['nameproduct', 'description', 'clientid', 'urlimg']
            });

          case 3:
            res.json({
              message: 'New Product created'
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createProduct.apply(this, arguments);
}

function getProducts(_x3, _x4) {
  return _getProducts.apply(this, arguments);
}

function _getProducts() {
  _getProducts = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ProductModels["default"].findAll({
              attributes: ['id', 'nameproduct', 'description', 'clientid', 'urlimg'],
              order: [['id', 'DESC']]
            });

          case 2:
            tasks = _context2.sent;
            res.json({
              tasks: tasks
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProducts.apply(this, arguments);
}

function getOneProduct(_x5, _x6) {
  return _getOneProduct.apply(this, arguments);
}

function _getOneProduct() {
  _getOneProduct = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, tasks;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //OBTENER UN PRODUCTO
            id = req.params.id;
            _context3.next = 3;
            return _ProductModels["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'nameproduct', 'description', 'clientid', 'urlimg']
            });

          case 3:
            tasks = _context3.sent;
            res.json(tasks);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneProduct.apply(this, arguments);
}

function updateProduct(_x7, _x8) {
  return _updateProduct.apply(this, arguments);
}

function _updateProduct() {
  _updateProduct = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, nameproduct, description, clientid, urlimg, updatedTask;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //ACTUALIZAR UN PRODUCTO
            id = req.params.id;
            _req$body2 = req.body, nameproduct = _req$body2.nameproduct, description = _req$body2.description, clientid = _req$body2.clientid, urlimg = _req$body2.urlimg;
            /*const tasks = await Product.findOne({
                attributes: ['nameproduct', 'description', 'clientid', 'id', 'urlimg'],
                where: { id }
            });*/

            _context4.next = 4;
            return _ProductModels["default"].update({
              nameproduct: nameproduct,
              description: description,
              clientid: clientid,
              urlimg: urlimg
            }, {
              where: {
                id: id
              }
            });

          case 4:
            updatedTask = _context4.sent;
            res.json({
              message: 'Product updated',
              updatedTask: updatedTask
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateProduct.apply(this, arguments);
}

function deleteProduct(_x9, _x10) {
  return _deleteProduct.apply(this, arguments);
}

function _deleteProduct() {
  _deleteProduct = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //BORRAR PRODUCTO
            id = req.params.id;
            _context5.next = 3;
            return _ProductModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.json({
              message: 'Product deleted'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteProduct.apply(this, arguments);
}

function getProductByClientid(_x11, _x12) {
  return _getProductByClientid.apply(this, arguments);
}

function _getProductByClientid() {
  _getProductByClientid = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var clientid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //OBTENER PRODUCTO POR ID CLIENTE
            clientid = req.params.clientid;
            _context6.next = 3;
            return _ProductModels["default"].findAll({
              attributes: ['id', 'clientid', 'nameproduct', 'description', 'urlimg'],
              where: {
                clientid: clientid
              }
            });

          case 3:
            tasks = _context6.sent;
            res.json(tasks);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getProductByClientid.apply(this, arguments);
}

function getUser(_x13, _x14) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var clientid, cli, produ;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            //FUNCTION USER WITH ALL THE PRODUCTS
            clientid = req.params.clientid;
            _context7.next = 3;
            return _ClientModels["default"].findOne({
              attributes: ['name', 'phone', 'email', 'urlimg'],
              where: {
                id: clientid
              }
            });

          case 3:
            cli = _context7.sent;
            _context7.next = 6;
            return _ProductModels["default"].findAll({
              attributes: ['nameproduct', 'description', 'urlimg'],
              where: {
                clientid: clientid
              }
            });

          case 6:
            produ = _context7.sent;
            res.json({
              cli: cli,
              produ: produ
            });

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getUser.apply(this, arguments);
}

function getUserDouble(_x15, _x16) {
  return _getUserDouble.apply(this, arguments);
}

function _getUserDouble() {
  _getUserDouble = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var product, client;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _ProductModels["default"].findAll({
              attributes: ['clientid', 'nameproduct', 'description', 'urlimg']
            });

          case 2:
            product = _context8.sent;
            _context8.next = 5;
            return _ClientModels["default"].findAll({
              attributes: ['id', 'name', 'urlimg', 'email', 'city']
            });

          case 5:
            client = _context8.sent;
            res.json({
              product: product,
              client: client
            });

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getUserDouble.apply(this, arguments);
}