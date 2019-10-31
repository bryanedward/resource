"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImage = getImage;
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getOneUser = getOneUser;
exports.login = login;
exports.authToken = authToken;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

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
    var reqUrl;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: especificar el tipo de dato en este caso es una imagen/jpg
            res.writeHead(200, {
              'content-type': 'image/jpg'
            });

            _fs["default"].createReadStream('src/photos/' + req.params.photoUser).pipe(res);

            reqUrl = _url["default"].format({
              // TODO: ------ se obtiene la url del metodo createUser-----
              protocol: req.protocol,
              host: req.get('host'),
              pathname: req.originalUrl
            });
            console.log(reqUrl);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getImage.apply(this, arguments);
}

function getUsers(_x3, _x4) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _UserModels["default"].findAll();

          case 3:
            users = _context2.sent;
            res.json({
              users: users
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
  return _getUsers.apply(this, arguments);
}

;

function createUser(_x5, _x6) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var emailUser, urlPhoto, reqUrl, data, _req$body, nameUser, _emailUser, roleUser, salt, bcryptPassword, imgSplit, fileName, extImg, extName, reqUrlSplit, photoUser, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // TODO: crear un nuevo usuario verificando si el correo existe
            emailUser = req.body.emailUser; // TODO: -- obtener la direccion donde se guarda la foto

            urlPhoto = req.files.photo.path;
            reqUrl = _url["default"].format({
              // TODO: ------ se obtiene la url del metodo createUser-----
              protocol: req.protocol,
              host: req.get('host'),
              pathname: req.originalUrl
            });
            _context3.next = 5;
            return _UserModels["default"].findOne({
              where: {
                emailuser: emailUser
              }
            });

          case 5:
            data = _context3.sent;

            if (!(data == null)) {
              _context3.next = 36;
              break;
            }

            _req$body = req.body, nameUser = _req$body.nameUser, _emailUser = _req$body.emailUser, roleUser = _req$body.roleUser; // TODO: ------- se usa el bcrpyt para encriptar la passwor-----

            _context3.next = 10;
            return _bcryptjs["default"].genSalt(10);

          case 10:
            salt = _context3.sent;
            _context3.next = 13;
            return _bcryptjs["default"].hash(req.body.passUser, salt);

          case 13:
            bcryptPassword = _context3.sent;
            // TODO: -------obtener la extension para verificacion
            //const imgSplit = urlPhoto.split('\\');
            imgSplit = urlPhoto.split('\/');
            fileName = imgSplit[2];
            extImg = fileName.split('\.');
            extName = extImg[1]; // TODO: ------Se crea la url donde estara la imagen del usuario -----------

            reqUrlSplit = reqUrl.split('\/');
            photoUser = reqUrlSplit[0] + '//' + reqUrlSplit[1] + '' + reqUrlSplit[2] + '/' + reqUrlSplit[3] + '/' + reqUrlSplit[4] + '/image/' + fileName;

            if (!(extName == 'png' || extName == 'jpg' || extName == 'jpeg')) {
              _context3.next = 33;
              break;
            }

            _context3.prev = 21;
            _context3.next = 24;
            return _UserModels["default"].create({
              nameuser: nameUser,
              emailuser: _emailUser,
              roleuser: roleUser,
              passuser: bcryptPassword,
              photouser: photoUser
            }, {
              fields: ['nameuser', 'emailuser', 'passuser', 'roleuser', 'photouser']
            });

          case 24:
            newUser = _context3.sent;

            if (newUser) {
              res.json({
                newUser: newUser
              });
            }

            _context3.next = 31;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t0 = _context3["catch"](21);
            res.status(500).json({
              message: "no se pudo crear el usuario"
            });

          case 31:
            _context3.next = 34;
            break;

          case 33:
            _fs["default"].unlink(urlPhoto, function (err) {
              res.status(400).send({
                message: " foto"
              });
            });

          case 34:
            _context3.next = 37;
            break;

          case 36:
            _fs["default"].unlink(urlPhoto, function (err) {
              res.status(400).send({
                message: "el email ya existe"
              });
            });

          case 37:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[21, 28]]);
  }));
  return _createUser.apply(this, arguments);
}

function getOneUser(_x7, _x8) {
  return _getOneUser.apply(this, arguments);
}

function _getOneUser() {
  _getOneUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var email, dataUser;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // TODO: buscar el usuario con el email
            email = req.params.email;
            _context4.next = 3;
            return _UserModels["default"].findOne({
              where: {
                emailuser: email
              }
            });

          case 3:
            dataUser = _context4.sent;

            if (dataUser == null) {
              res.json({
                message: 'nothing'
              });
            } else {
              res.json({
                dataUser: dataUser
              });
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getOneUser.apply(this, arguments);
}

function login(_x9, _x10) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body2, emailUser, passUser, data, pass, token;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //login of user and the password
            _req$body2 = req.body, emailUser = _req$body2.emailUser, passUser = _req$body2.passUser;
            console.log(emailUser);
            _context5.next = 4;
            return _UserModels["default"].findOne({
              where: {
                emailuser: emailUser
              }
            });

          case 4:
            data = _context5.sent;

            if (data) {
              _context5.next = 9;
              break;
            }

            res.json('email no existe');
            _context5.next = 16;
            break;

          case 9:
            _context5.next = 11;
            return _bcryptjs["default"].compare(req.body.pass, data.passuser);

          case 11:
            pass = _context5.sent;
            console.log(pass);
            if (!pass) res.json('password is incorrect'); //create assign token

            token = _jsonwebtoken["default"].sign({
              id: data.iduser
            }, process.env.SECRET_TOKEN);
            res.header('auto-token', token).send(token);

          case 16:
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
            return _UserModels["default"].findAll({
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

function deleteUser(_x13, _x14) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator(
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
            return _UserModels["default"].destroy({
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
  return _deleteUser.apply(this, arguments);
}

;

function updateUser(_x15, _x16) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var id, _req$body3, name, phone, email, city, projects;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            //ACTUALIZAR UN UserE
            id = req.params.id;
            _req$body3 = req.body, name = _req$body3.name, phone = _req$body3.phone, email = _req$body3.email, city = _req$body3.city;
            _context10.next = 4;
            return _UserModels["default"].findAll({
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
  return _updateUser.apply(this, arguments);
}

;