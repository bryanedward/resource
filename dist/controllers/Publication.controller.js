"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublications = getPublications;
exports.createPublication = createPublication;
exports.getOnePublication = getOnePublication;
exports.updatePublication = updatePublication;
exports.deletePublication = deletePublication;
exports.getPublicationByUserid = getPublicationByUserid;
exports.getUser = getUser;
exports.getUserDouble = getUserDouble;
exports.getUpdate = getUpdate;

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPublications(_x, _x2) {
  return _getPublications.apply(this, arguments);
}

function _getPublications() {
  _getPublications = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var publications;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _PublicationModels["default"].findAll({
              attributes: ['idpublication', 'namepublication', 'descriptpublication', 'levelsubject', 'userid'],
              order: [['idpublication', 'DESC']]
            });

          case 2:
            publications = _context.sent;
            res.json({
              publications: publications
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPublications.apply(this, arguments);
}

function createPublication(_x3, _x4) {
  return _createPublication.apply(this, arguments);
}

function _createPublication() {
  _createPublication = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, namePublication, descriptPublication, levelSubject;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // TODO: crear una publicacion con el jwt para identificarse
            _req$body = req.body, namePublication = _req$body.namePublication, descriptPublication = _req$body.descriptPublication, levelSubject = _req$body.levelSubject;
            _context2.next = 3;
            return _PublicationModels["default"].create({
              namepublication: namePublication,
              descriptpublication: descriptPublication,
              levelsubject: levelSubject,
              userid: req.user.id
            }, {
              fields: ['namepublication', 'descriptpublication', 'levelsubject', 'userid']
            });

          case 3:
            res.json({
              message: 'publicacion creada con exito'
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createPublication.apply(this, arguments);
}

function getOnePublication(_x5, _x6) {
  return _getOnePublication.apply(this, arguments);
}

function _getOnePublication() {
  _getOnePublication = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, tasks;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //OBTENER UN PublicationO
            id = req.params.id;
            _context3.next = 3;
            return _PublicationModels["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'namePublication', 'description', 'Userid', 'urlimg']
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
  return _getOnePublication.apply(this, arguments);
}

function updatePublication(_x7, _x8) {
  return _updatePublication.apply(this, arguments);
}

function _updatePublication() {
  _updatePublication = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, namePublication, description, Userid, urlimg, updatedTask;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //ACTUALIZAR UN PublicationO
            id = req.params.id;
            _req$body2 = req.body, namePublication = _req$body2.namePublication, description = _req$body2.description, Userid = _req$body2.Userid, urlimg = _req$body2.urlimg;
            /*const tasks = await Publication.findOne({
                attributes: ['namePublication', 'description', 'Userid', 'id', 'urlimg'],
                where: { id }
            });*/

            _context4.next = 4;
            return _PublicationModels["default"].update({
              namePublication: namePublication,
              description: description,
              Userid: Userid,
              urlimg: urlimg
            }, {
              where: {
                id: id
              }
            });

          case 4:
            updatedTask = _context4.sent;
            res.json({
              message: 'Publication updated',
              updatedTask: updatedTask
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updatePublication.apply(this, arguments);
}

function deletePublication(_x9, _x10) {
  return _deletePublication.apply(this, arguments);
}

function _deletePublication() {
  _deletePublication = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //BORRAR PublicationO
            id = req.params.id;
            _context5.next = 3;
            return _PublicationModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            res.json({
              message: 'Publication deleted'
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deletePublication.apply(this, arguments);
}

function getPublicationByUserid(_x11, _x12) {
  return _getPublicationByUserid.apply(this, arguments);
}

function _getPublicationByUserid() {
  _getPublicationByUserid = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var Userid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //OBTENER PublicationO POR ID UserE
            Userid = req.params.Userid;
            _context6.next = 3;
            return _PublicationModels["default"].findAll({
              attributes: ['id', 'Userid', 'namePublication', 'description', 'urlimg'],
              where: {
                Userid: Userid
              }
            });

          case 3:
            tasks = _context6.sent;
            res.json({
              Publication: tasks
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getPublicationByUserid.apply(this, arguments);
}

function getUser(_x13, _x14) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var Userid, cli, produ;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            //FUNCTION USER WITH ALL THE PublicationS
            Userid = req.params.Userid;
            _context7.next = 3;
            return _UserModels["default"].findOne({
              attributes: ['name', 'phone', 'email', 'urlimg'],
              where: {
                id: Userid
              }
            });

          case 3:
            cli = _context7.sent;
            _context7.next = 6;
            return _PublicationModels["default"].findAll({
              attributes: ['namePublication', 'description', 'urlimg'],
              where: {
                Userid: Userid
              }
            });

          case 6:
            produ = _context7.sent;
            res.json(produ);

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
    var Publication, User;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Publication.findAll({
              attributes: ['Userid', 'namePublication', 'description', 'urlimg']
            });

          case 2:
            Publication = _context8.sent;
            _context8.next = 5;
            return User.findAll({
              attributes: ['id', 'name', 'urlimg', 'email', 'city']
            });

          case 5:
            User = _context8.sent;
            res.json({
              Publication: Publication,
              User: User
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

function getUpdate(_x17, _x18) {
  return _getUpdate.apply(this, arguments);
}

function _getUpdate() {
  _getUpdate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var user, results;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            //NEW FUNCTION FIND USER WITH EL UserID
            user = req.params.user;
            _context9.next = 3;
            return _UserModels["default"].findOne({
              where: {
                id: user
              }
            });

          case 3:
            results = _context9.sent;
            res.json(results);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getUpdate.apply(this, arguments);
}