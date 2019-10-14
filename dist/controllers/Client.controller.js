"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImage = getImage;
exports.getClients = getClients;
exports.createClient = createClient;
exports.getOneClient = getOneClient;
exports.login = login;
exports.authToken = authToken;
exports.deleteClient = deleteClient;
exports.updateClient = updateClient;

var _ClientModels = _interopRequireDefault(require("../models/ClientModels"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getImage(_x, _x2) {
  return _getImage.apply(this, arguments);
}

function _getImage() {
  _getImage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: especificar el tipo de dato en este caso es una imagen/jpg
            res.writeHead(200, {
              'content-type': 'image/jpg'
            });

            _fs["default"].createReadStream('src/photos/profile.jpg').pipe(res);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getImage.apply(this, arguments);
}

function getClients(_x3, _x4) {
  return _getClients.apply(this, arguments);
}

function _getClients() {
  _getClients = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _ClientModels["default"].findAll();

          case 3:
            projects = _context2.sent;
            res.json({
              projects: projects
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getClients.apply(this, arguments);
}

;

function createClient(_x5, _x6) {
  return _createClient.apply(this, arguments);
}

function _createClient() {
  _createClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var email, data, _req$body, name, phone, _email, city, urlimg, salt, bcryptPassword, urlPhoto, imgSplit, fileName, extImg, extName, newProject;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //NUEVO FUNCION PARA VERIFICAR UN USUARIO Y CREAR UN CLIENTE
            email = req.body.email;
            _context3.next = 3;
            return _ClientModels["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            data = _context3.sent;

            if (!(data == null)) {
              _context3.next = 34;
              break;
            }

            _req$body = req.body, name = _req$body.name, phone = _req$body.phone, _email = _req$body.email, city = _req$body.city, urlimg = _req$body.urlimg; //usar el bcrpyt para encriptar la password

            _context3.next = 8;
            return _bcryptjs["default"].genSalt(10);

          case 8:
            salt = _context3.sent;
            _context3.next = 11;
            return _bcryptjs["default"].hash(req.body.pass, salt);

          case 11:
            bcryptPassword = _context3.sent;
            // TODO: verificar si es una foto
            urlPhoto = req.files.photo.path;
            imgSplit = urlPhoto.split('\\');
            fileName = imgSplit[2];
            extImg = fileName.split('\.');
            extName = extImg[1];

            if (!(extName == 'png' || extName == 'jpg' || extName == 'jpeg')) {
              _context3.next = 32;
              break;
            }

            _context3.prev = 18;
            _context3.next = 21;
            return _ClientModels["default"].create({
              name: name,
              phone: phone,
              email: _email,
              city: city,
              urlimg: fileName,
              pass: bcryptPassword
            }, {
              fields: ['name', 'phone', 'email', 'city', 'urlimg', 'pass']
            });

          case 21:
            newProject = _context3.sent;

            if (!newProject) {
              _context3.next = 25;
              break;
            }

            res.json({
              message: 'new account',
              data: newProject
            });
            return _context3.abrupt("return");

          case 25:
            _context3.next = 30;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](18);
            res.status(500).json({
              message: "Something goes wrong"
            });

          case 30:
            _context3.next = 32;
            break;

          case 32:
            _context3.next = 35;
            break;

          case 34:
            res.json({
              message: 'the email exists'
            });

          case 35:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[18, 27]]);
  }));
  return _createClient.apply(this, arguments);
}

function getOneClient(_x7, _x8) {
  return _getOneClient.apply(this, arguments);
}

function _getOneClient() {
  _getOneClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var email, project;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //OBTENER UN CLIENTE
            email = req.body.email;
            _context4.next = 3;
            return _ClientModels["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            project = _context4.sent;

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
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOneClient.apply(this, arguments);
}

function login(_x9, _x10) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var data, pass, token;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _ClientModels["default"].findOne({
              where: {
                email: req.body.email
              }
            });

          case 2:
            data = _context5.sent;
            if (!data) res.json('email not exits'); //use the method compare for get the pass without encrypt

            _context5.next = 6;
            return _bcryptjs["default"].compare(req.body.pass, data.pass);

          case 6:
            pass = _context5.sent;
            if (!pass) res.json('password is incorrect'); //create assign token

            token = _jsonwebtoken["default"].sign({
              id: data.id
            }, process.env.SECRET_TOKEN);
            res.header('auto-token', token).send(token);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _login.apply(this, arguments);
}

function authToken(_x11, _x12) {
  return _authToken.apply(this, arguments);
}

function _authToken() {
  _authToken = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var phone, updateData;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            //update autotoken
            phone = req.body.phone;
            _context7.next = 3;
            return _ClientModels["default"].findAll({
              where: {
                email: req.body.email
              }
            });

          case 3:
            updateData = _context7.sent;

            if (updateData.length > 0) {
              updateData.forEach(
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
                            phone: phone
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x17) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            res.json(updateData);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _authToken.apply(this, arguments);
}

function deleteClient(_x13, _x14) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return _ClientModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context8.sent;
            res.json(deleteRowCount);
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

;

function updateClient(_x15, _x16) {
  return _updateClient.apply(this, arguments);
}

function _updateClient() {
  _updateClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var id, _req$body2, name, phone, email, city, projects;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            //ACTUALIZAR UN CLIENTE
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, phone = _req$body2.phone, email = _req$body2.email, city = _req$body2.city;
            _context10.next = 4;
            return _ClientModels["default"].findAll({
              attributes: ['id', 'name', 'phone', 'email', 'city'],
              where: {
                id: id
              }
            });

          case 4:
            projects = _context10.sent;

            if (projects.length > 0) {
              projects.forEach(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee9(element) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return element.update({
                            name: name,
                            phone: phone,
                            email: email,
                            city: city
                          });

                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x18) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }

            return _context10.abrupt("return", res.json({
              message: 'Project updated succesfully',
              data: projects
            }));

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _updateClient.apply(this, arguments);
}

;