"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublications = getPublications;
exports.createPublication = createPublication;
exports.updatePublication = updatePublication;
exports.test = test;
exports.getOnePublication = getOnePublication;
exports.deletePublication = deletePublication;
exports.getPublicationByUserid = getPublicationByUserid;
exports.getUser = getUser;
exports.getUpdate = getUpdate;

var _PublicationModels = _interopRequireDefault(require("../models/PublicationModels"));

var _UserModels = _interopRequireDefault(require("../models/UserModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPublications(req, res) {
  var publications;
  return regeneratorRuntime.async(function getPublications$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            include: [_UserModels["default"]],
            order: [['idpublication', 'DESC']]
          }));

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
  });
}

function createPublication(req, res) {
  var _req$body, namePublication, descriptPublication, levelSubject;

  return regeneratorRuntime.async(function createPublication$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // TODO: crear una publicacion con el jwt para identificarse
          _req$body = req.body, namePublication = _req$body.namePublication, descriptPublication = _req$body.descriptPublication, levelSubject = _req$body.levelSubject;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].create({
            namepublication: namePublication,
            descriptpublication: descriptPublication,
            levelsubject: levelSubject,
            userIduser: req.user.id
          }, {
            fields: ['namepublication', 'descriptpublication', 'levelsubject', 'userIduser']
          }));

        case 3:
          res.json({
            message: 'publicacion creada con exito'
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function updatePublication(req, res) {
  var _req$body2, idpublication, namepublication, descriptpublication, updatedTask;

  return regeneratorRuntime.async(function updatePublication$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // TODO: actualizar las publicaciones
          _req$body2 = req.body, idpublication = _req$body2.idpublication, namepublication = _req$body2.namepublication, descriptpublication = _req$body2.descriptpublication;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].update({
            namepublication: namepublication,
            descriptpublication: descriptpublication
          }, {
            where: {
              idpublication: idpublication
            }
          }));

        case 3:
          updatedTask = _context3.sent;
          res.json({
            message: 'actualizado con exito'
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function test(req, res) {
  return regeneratorRuntime.async(function test$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function getOnePublication(req, res) {
  var id, tasks;
  return regeneratorRuntime.async(function getOnePublication$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          //OBTENER UN PublicationO
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'namePublication', 'description', 'Userid', 'urlimg']
          }));

        case 3:
          tasks = _context5.sent;
          res.json(tasks);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function deletePublication(req, res) {
  var id;
  return regeneratorRuntime.async(function deletePublication$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          //BORRAR PublicationO
          id = req.params.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].destroy({
            where: {
              id: id
            }
          }));

        case 3:
          res.json({
            message: 'Publication deleted'
          });

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function getPublicationByUserid(req, res) {
  var Userid, tasks;
  return regeneratorRuntime.async(function getPublicationByUserid$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          //OBTENER PublicationO POR ID UserE
          Userid = req.params.Userid;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['id', 'Userid', 'namePublication', 'description', 'urlimg'],
            where: {
              Userid: Userid
            }
          }));

        case 3:
          tasks = _context7.sent;
          res.json({
            Publication: tasks
          });

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getUser(req, res) {
  var Userid, cli, produ;
  return regeneratorRuntime.async(function getUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          //FUNCTION USER WITH ALL THE PublicationS
          Userid = req.params.Userid;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            attributes: ['name', 'phone', 'email', 'urlimg'],
            where: {
              id: Userid
            }
          }));

        case 3:
          cli = _context8.sent;
          _context8.next = 6;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['namePublication', 'description', 'urlimg'],
            where: {
              Userid: Userid
            }
          }));

        case 6:
          produ = _context8.sent;
          res.json(produ);

        case 8:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function getUpdate(req, res) {
  var user, results;
  return regeneratorRuntime.async(function getUpdate$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          //NEW FUNCTION FIND USER WITH EL UserID
          user = req.params.user;
          _context9.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            where: {
              id: user
            }
          }));

        case 3:
          results = _context9.sent;
          res.json(results);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
}