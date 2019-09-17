import express, {json} from 'express';
import morgan from 'morgan';


//importing routes
import cliente from './routes/ClientRouter';
import producto from './routes/ProductRouter';


//initialization
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());


//routers
app.use('/barther/client',cliente);
app.use('/barther/product',producto);




export default app;