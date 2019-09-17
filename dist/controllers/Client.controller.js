"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClients = getClients;
exports.updatemethod = updatemethod;
exports.getOneClient = getOneClient;
exports.login = login;
exports.deleteClient = deleteClient;
exports.updateClient = updateClient;

var _ClientModels = _interopRequireDefault(require("../models/ClientModels"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getClients(_x, _x2) {
  return _getClients.apply(this, arguments);
}

function _getClients() {
  _getClients = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ClientModels["default"].findAll();

          case 3:
            projects = _context.sent;
            res.json({
              projects: projects
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getClients.apply(this, arguments);
}

;

function updatemethod(_x3, _x4) {
  return _updatemethod.apply(this, arguments);
}

function _updatemethod() {
  _updatemethod = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var email, data, _req$body, name, phone, _email, city, urlimg, salt, bcryptPassword, newProject;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //NUEVO FUNCION PARA VERIFICAR UN USUARIO Y CREAR UN CLIENTE
            email = req.body.email;
            _context2.next = 3;
            return _ClientModels["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            data = _context2.sent;

            if (!(data == null)) {
              _context2.next = 27;
              break;
            }

            _req$body = req.body, name = _req$body.name, phone = _req$body.phone, _email = _req$body.email, city = _req$body.city, urlimg = _req$body.urlimg; //usar el bcrpyt para encriptar la password

            _context2.next = 8;
            return _bcryptjs["default"].genSalt(10);

          case 8:
            salt = _context2.sent;
            _context2.next = 11;
            return _bcryptjs["default"].hash(req.body.pass, salt);

          case 11:
            bcryptPassword = _context2.sent;
            _context2.prev = 12;
            _context2.next = 15;
            return _ClientModels["default"].create({
              name: name,
              phone: phone,
              email: _email,
              city: city,
              urlimg: urlimg,
              pass: bcryptPassword
            }, {
              fields: ['name', 'phone', 'email', 'city', 'urlimg', 'pass']
            });

          case 15:
            newProject = _context2.sent;

            if (!newProject) {
              _context2.next = 19;
              break;
            }

            res.json({
              message: 'new account',
              data: newProject
            });
            return _context2.abrupt("return");

          case 19:
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](12);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong"
            });

          case 25:
            _context2.next = 28;
            break;

          case 27:
            res.json({
              message: 'error account'
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 21]]);
  }));
  return _updatemethod.apply(this, arguments);
}

function getOneClient(_x5, _x6) {
  return _getOneClient.apply(this, arguments);
}

function _getOneClient() {
  _getOneClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var email, project;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //OBTENER UN CLIENTE
            email = req.body.email;
            _context3.next = 3;
            return _ClientModels["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            project = _context3.sent;

            if (project == null) {
              res.json({
                message: 'nothing'
              });
            } else {
              res.json({
                project: project
              });
            }

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneClient.apply(this, arguments);
}

function login(_x7, _x8) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var data, pass, token;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ClientModels["default"].findOne({
              where: {
                email: req.body.email
              }
            });

          case 2:
            data = _context4.sent;
            if (!data) res.json('email not exits'); //use the method compare for get the pass without encrypt

            _context4.next = 6;
            return _bcryptjs["default"].compare(req.body.pass, data.pass);

          case 6:
            pass = _context4.sent;
            if (!pass) res.json('password is incorrect'); //create assign token 

            token = _jsonwebtoken["default"].sign({
              id: data.id
            }, process.env.SECRET_TOKEN);
            res.header('auto-token', token).send(token);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _login.apply(this, arguments);
}

function deleteClient(_x9, _x10) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _ClientModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json(deleteRowCount);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

;

function updateClient(_x11, _x12) {
  return _updateClient.apply(this, arguments);
}

function _updateClient() {
  _updateClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, name, phone, email, city, projects;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            //ACTUALIZAR UN CLIENTE
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, phone = _req$body2.phone, email = _req$body2.email, city = _req$body2.city;
            _context7.next = 4;
            return _ClientModels["default"].findAll({
              attributes: ['id', 'name', 'phone', 'email', 'city'],
              where: {
                id: id
              }
            });

          case 4:
            projects = _context7.sent;

            if (projects.length > 0) {
              projects.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee6(element) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return element.update({
                            name: name,
                            phone: phone,
                            email: email,
                            city: city
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context7.abrupt("return", res.json({
              message: 'Project updated succesfully',
              data: projects
            }));

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _updateClient.apply(this, arguments);
}

;