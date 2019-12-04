import express, {json} from 'express';
import morgan from 'morgan';
import fs from 'fs';

//importing routes
import user from './routes/UserRouter';
import publication from './routes/PublicationRouter';
import message from './routes/MessageRouter';

//initialization
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routers
app.use('/dev/user',user);
app.use('/dev/publications',publication);
app.use('/dev/messages',message);




export default app;
