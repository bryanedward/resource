"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.post('/', _task.createTask);
router.get('/', _task.getTasks);
router["delete"]('/:id', _task.deleteTasks);
router.put('/:id', _task.updateTask);
router.get('/:id', _task.getOneTask);
router.get('/project/:projectid', _task.getTasksByProject);
var _default = router;
exports["default"] = _default;