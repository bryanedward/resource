import express, {json} from 'express';
import morgan from 'morgan';
import fs from 'fs';

//importing routes
import cliente from './routes/ClientRouter';
import producto from './routes/ProductRouter';


//initialization
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());


//routers
app.use('/dev/user',cliente);
app.use('/dev/publications',producto);





export default app;
