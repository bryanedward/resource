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

app.use('./photos', express.static(__dirname));


//routers
app.use('/dev/user',user);
app.use('/dev/publications',publication);
app.use('/dev/messages',message);




export default app;
