import { Router } from 'express';
const router = Router();

import { createTask, getTasks, deleteTasks, updateTask, getOneTask , getTasksByProject} from '../controllers/task.controller';

router.post('/', createTask);
router.get('/', getTasks);

router.delete('/:id', deleteTasks);

router.put('/:id', updateTask);

router.get('/:id', getOneTask);

router.get('/project/:projectid', getTasksByProject);

export default router;
