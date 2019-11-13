import express, {json} from 'express';
import morgan from 'morgan';
import fs from 'fs';

//importing routes
import user from './routes/UserRouter';
import publication from './routes/PublicationRouter';


//initialization
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());




//routers
app.use('/dev/user',user);
app.use('/dev/publications',publication);





export default app;
