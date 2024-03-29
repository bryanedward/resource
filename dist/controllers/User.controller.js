"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImage = getImage;
exports.login = login;
exports.createUser = createUser;
exports.getOneUser = getOneUser;
exports.getDataUser = getDataUser;
exports.getPoints = getPoints;
exports.authToken = authToken;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

var _PointsModels = _interopRequireDefault(require("../models/PointsModels"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getImage(req, res) {
  return regeneratorRuntime.async(function getImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // TODO: especificar el tipo de dato en este caso es una imagen/jpg
          res.writeHead(200, {
            'content-type': 'image/jpg'
          });

          _fs["default"].createReadStream('src/photos/' + req.params.photoUser).pipe(res);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function login(req, res) {
  var email, user, pass, token;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //login of user and the password
          email = req.body.emailUser;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            where: {
              emailuser: email
            }
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 8;
            break;
          }

          res.json({
            message: "este correo no existe"
          });
          _context2.next = 16;
          break;

        case 8:
          if (!(user.permiss != true)) {
            _context2.next = 12;
            break;
          }

          res.json({
            pass: user.permiss,
            message: "Cuenta bloqueada por mal uso nos contactaremos por su correo " + user.nameuser
          });
          _context2.next = 16;
          break;

        case 12:
          _context2.next = 14;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(req.body.passUser, user.passuser));

        case 14:
          pass = _context2.sent;

          if (pass) {
            //create assign token
            token = _jsonwebtoken["default"].sign({
              id: user.iduser
            }, _config["default"].SECRET_TOKEN);
            res.json({
              pass: user.permiss,
              authToken: token
            });
          } else {
            res.json({
              message: "Contraseña es incorrecta"
            });
          }

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function createUser(req, res) {
  var result, emailUser, urlPhoto, reqUrl, data, _req$body, nameUser, _emailUser, roleUser, salt, bcryptPassword, imgSplit, fileName, extImg, extName, reqUrlSplit, photoUser, newUser;

  return regeneratorRuntime.async(function createUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // TODO: crear un nuevo usuario verificando si el correo existe
          result = req.body;
          emailUser = result.emailUser; // TODO: -- obtener la direccion donde se guarda la foto

          urlPhoto = req.files.photo.path;
          reqUrl = _url["default"].format({
            // TODO: ------ se obtiene la url del metodo createUser-----
            protocol: req.protocol,
            host: req.get('host'),
            pathname: req.originalUrl
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            where: {
              emailuser: emailUser
            }
          }));

        case 6:
          data = _context3.sent;

          if (!(data == null)) {
            _context3.next = 40;
            break;
          }

          _req$body = req.body, nameUser = _req$body.nameUser, _emailUser = _req$body.emailUser, roleUser = _req$body.roleUser; // TODO: ------- se usa el bcrpyt para encriptar la passwor-----

          _context3.next = 11;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt(10));

        case 11:
          salt = _context3.sent;
          _context3.next = 14;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(req.body.passUser, salt));

        case 14:
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
            _context3.next = 37;
            break;
          }

          _context3.prev = 22;
          _context3.next = 25;
          return regeneratorRuntime.awrap(_UserModels["default"].create({
            nameuser: nameUser,
            emailuser: _emailUser,
            roleuser: roleUser,
            passuser: bcryptPassword,
            photouser: photoUser,
            permiss: true
          }, {
            fields: ['nameuser', 'emailuser', 'passuser', 'roleuser', 'photouser', 'permiss']
          }));

        case 25:
          newUser = _context3.sent;
          console.log(newUser.iduser);
          _context3.next = 29;
          return regeneratorRuntime.awrap(_PointsModels["default"].create({
            userIduser: newUser.iduser,
            pointlimit: 0,
            cantpoint: 0
          }, {
            fields: ['userIduser', 'pointlimit', 'cantpoint']
          }));

        case 29:
          if (newUser) {
            res.json({
              message: "usuario creado"
            });
          }

          _context3.next = 35;
          break;

        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](22);
          res.json({
            message: "no se pudo crear el usuario"
          });

        case 35:
          _context3.next = 38;
          break;

        case 37:
          _fs["default"].unlink(urlPhoto, function (err) {
            res.status(400).send({
              message: " foto"
            });
          });

        case 38:
          _context3.next = 41;
          break;

        case 40:
          _fs["default"].unlink(urlPhoto, function (err) {
            res.json({
              message: "el email ya existe"
            });
          });

        case 41:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[22, 32]]);
}

function getOneUser(req, res) {
  var id, dataUser;
  return regeneratorRuntime.async(function getOneUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // TODO: buscar el usuario con el email
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            where: {
              iduser: id
            }
          }));

        case 3:
          dataUser = _context4.sent;

          if (dataUser == null) {
            res.json({
              message: 'nothing'
            });
          } else {
            res.json(dataUser);
          }

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function getDataUser(req, res) {
  var infoUser;
  return regeneratorRuntime.async(function getDataUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _UserModels["default"].hasMany(_PointsModels["default"]);

          _context5.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            include: [_PointsModels["default"]],
            attributes: ['iduser', 'roleuser', 'nameuser', 'emailuser', 'photouser'],
            where: {
              iduser: req.user.id
            }
          }));

        case 3:
          infoUser = _context5.sent;
          res.json(infoUser);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function getPoints(req, res) {
  var points;
  return regeneratorRuntime.async(function getPoints$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_PointsModels["default"].findOne({
            where: {
              userIduser: req.user.id
            }
          }));

        case 2:
          points = _context6.sent;
          res.json({
            points: points
          });

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function authToken(req, res) {
  var phone, updateData;
  return regeneratorRuntime.async(function authToken$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          //update autotoken
          phone = req.body.phone;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findAll({
            where: {
              email: req.body.email
            }
          }));

        case 3:
          updateData = _context8.sent;

          if (updateData.length > 0) {
            updateData.forEach(function _callee(element) {
              return regeneratorRuntime.async(function _callee$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return regeneratorRuntime.awrap(element.update({
                        phone: phone
                      }));

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              });
            });
          }

          res.json(updateData);

        case 6:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function deleteUser(req, res) {
  var id, deleteRowCount;
  return regeneratorRuntime.async(function deleteUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          id = req.params.id;
          _context9.next = 4;
          return regeneratorRuntime.awrap(_UserModels["default"].destroy({
            where: {
              id: id
            }
          }));

        case 4:
          deleteRowCount = _context9.sent;
          res.json(deleteRowCount);
          _context9.next = 11;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);

        case 11:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

;

function updateUser(req, res) {
  var id, _req$body2, name, phone, email, city, projects;

  return regeneratorRuntime.async(function updateUser$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          //ACTUALIZAR UN UserE
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, phone = _req$body2.phone, email = _req$body2.email, city = _req$body2.city;
          _context11.next = 4;
          return regeneratorRuntime.awrap(_UserModels["default"].findAll({
            attributes: ['id', 'name', 'phone', 'email', 'city'],
            where: {
              id: id
            }
          }));

        case 4:
          projects = _context11.sent;

          if (projects.length > 0) {
            projects.forEach(function _callee2(element) {
              return regeneratorRuntime.async(function _callee2$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return regeneratorRuntime.awrap(element.update({
                        name: name,
                        phone: phone,
                        email: email,
                        city: city
                      }));

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              });
            });
          }

          return _context11.abrupt("return", res.json({
            message: 'Project updated succesfully',
            data: projects
          }));

        case 7:
        case "end":
          return _context11.stop();
      }
    }
  });
}

;