import express, {json} from 'express';
import morgan from 'morgan';


//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());


//routers
app.use('/api/project',projectRoutes);
app.use('/api/tasks',taskRoutes);




export default app;