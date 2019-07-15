"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClients = getClients;
exports.updatemethod = updatemethod;
exports.getOneClient = getOneClient;
exports.deleteClient = deleteClient;
exports.updateClient = updateClient;

var _ClientModels = _interopRequireDefault(require("../models/ClientModels"));

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
/*
export async function createClients(req, res) {
    //CREAR UN CLIENTE
    const { name, phone, email, city } = req.body;

    try {
        let newProject = await Client.create({
            name,
            phone,
            email,
            city
        }, {
                fields: ['name', 'phone', 'email', 'city']
            });

        if (newProject) {
            res.json({
                message: "client created successsfully !!",
                data: newProject
            });
            return
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};
*/


function _updatemethod() {
  _updatemethod = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var email, data, _req$body, name, phone, _email, city, urlimg, pass, newProject;

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
              _context2.next = 21;
              break;
            }

            _req$body = req.body, name = _req$body.name, phone = _req$body.phone, _email = _req$body.email, city = _req$body.city, urlimg = _req$body.urlimg, pass = _req$body.pass;
            _context2.prev = 6;
            _context2.next = 9;
            return _ClientModels["default"].create({
              name: name,
              phone: phone,
              email: _email,
              city: city,
              urlimg: urlimg,
              pass: pass
            }, {
              fields: ['name', 'phone', 'email', 'city', 'urlimg', 'pass']
            });

          case 9:
            newProject = _context2.sent;

            if (!newProject) {
              _context2.next = 13;
              break;
            }

            res.json({
              message: 'new account',
              data: newProject
            });
            return _context2.abrupt("return");

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](6);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 19:
            _context2.next = 22;
            break;

          case 21:
            res.json({
              message: 'error account'
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 15]]);
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
            email = req.params.email;
            console.log(email);
            _context3.next = 4;
            return _ClientModels["default"].findOne({
              where: {
                email: email
              }
            });

          case 4:
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

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneClient.apply(this, arguments);
}

;

function deleteClient(_x7, _x8) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _ClientModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json(deleteRowCount);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

;

function updateClient(_x9, _x10) {
  return _updateClient.apply(this, arguments);
}

function _updateClient() {
  _updateClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, phone, email, city, projects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //ACTUALIZAR UN CLIENTE
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, phone = _req$body2.phone, email = _req$body2.email, city = _req$body2.city;
            _context6.next = 4;
            return _ClientModels["default"].findAll({
              attributes: ['id', 'name', 'phone', 'email', 'city'],
              where: {
                id: id
              }
            });

          case 4:
            projects = _context6.sent;

            if (projects.length > 0) {
              projects.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(element) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return element.update({
                            name: name,
                            phone: phone,
                            email: email,
                            city: city
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Project updated succesfully',
              data: projects
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateClient.apply(this, arguments);
}

;