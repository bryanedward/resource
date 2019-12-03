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

function getPublications(req, res) {
  var publications;
  return regeneratorRuntime.async(function getPublications$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['idpublication', 'namepublication', 'descriptpublication', 'levelsubject', 'userid'],
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
            userid: req.user.id
          }, {
            fields: ['namepublication', 'descriptpublication', 'levelsubject', 'userid']
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

function getOnePublication(req, res) {
  var id, tasks;
  return regeneratorRuntime.async(function getOnePublication$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          //OBTENER UN PublicationO
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findOne({
            where: {
              id: id
            },
            attributes: ['id', 'namePublication', 'description', 'Userid', 'urlimg']
          }));

        case 3:
          tasks = _context3.sent;
          res.json(tasks);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function updatePublication(req, res) {
  var id, _req$body2, namePublication, description, Userid, urlimg, updatedTask;

  return regeneratorRuntime.async(function updatePublication$(_context4) {
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
          return regeneratorRuntime.awrap(_PublicationModels["default"].update({
            namePublication: namePublication,
            description: description,
            Userid: Userid,
            urlimg: urlimg
          }, {
            where: {
              id: id
            }
          }));

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
  });
}

function deletePublication(req, res) {
  var id;
  return regeneratorRuntime.async(function deletePublication$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          //BORRAR PublicationO
          id = req.params.id;
          _context5.next = 3;
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
          return _context5.stop();
      }
    }
  });
}

function getPublicationByUserid(req, res) {
  var Userid, tasks;
  return regeneratorRuntime.async(function getPublicationByUserid$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          //OBTENER PublicationO POR ID UserE
          Userid = req.params.Userid;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['id', 'Userid', 'namePublication', 'description', 'urlimg'],
            where: {
              Userid: Userid
            }
          }));

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
  });
}

function getUser(req, res) {
  var Userid, cli, produ;
  return regeneratorRuntime.async(function getUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          //FUNCTION USER WITH ALL THE PublicationS
          Userid = req.params.Userid;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findOne({
            attributes: ['name', 'phone', 'email', 'urlimg'],
            where: {
              id: Userid
            }
          }));

        case 3:
          cli = _context7.sent;
          _context7.next = 6;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['namePublication', 'description', 'urlimg'],
            where: {
              Userid: Userid
            }
          }));

        case 6:
          produ = _context7.sent;
          res.json(produ);

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getUserDouble(req, res) {
  var iterable, publication, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, variable, data;

  return regeneratorRuntime.async(function getUserDouble$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          //FUNCTION USER WITH ALL THE PublicationSS
          _PublicationModels["default"].belongsTo(_UserModels["default"], {
            foreignKey: 'userid'
          });

          _context8.next = 3;
          return regeneratorRuntime.awrap(_UserModels["default"].findAll());

        case 3:
          iterable = _context8.sent;
          publication = new Array();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context8.prev = 8;
          _iterator = iterable[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context8.next = 19;
            break;
          }

          variable = _step.value;
          _context8.next = 14;
          return regeneratorRuntime.awrap(_PublicationModels["default"].findAll({
            attributes: ['idpublication', 'userid', 'namepublication', 'descriptpublication'],
            include: [{
              model: _UserModels["default"],
              attributes: ['nameuser', 'emailuser', 'roleuser', 'iduser'],
              where: {
                'iduser': variable.iduser
              }
            }]
          }));

        case 14:
          data = _context8.sent;
          publication.unshift(data);

        case 16:
          _iteratorNormalCompletion = true;
          _context8.next = 10;
          break;

        case 19:
          _context8.next = 25;
          break;

        case 21:
          _context8.prev = 21;
          _context8.t0 = _context8["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context8.t0;

        case 25:
          _context8.prev = 25;
          _context8.prev = 26;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 28:
          _context8.prev = 28;

          if (!_didIteratorError) {
            _context8.next = 31;
            break;
          }

          throw _iteratorError;

        case 31:
          return _context8.finish(28);

        case 32:
          return _context8.finish(25);

        case 33:
          //res.send(Object.assign(publication[1],publication[0]));
          res.json({
            publication: publication
          });

        case 34:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[8, 21, 25, 33], [26,, 28, 32]]);
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