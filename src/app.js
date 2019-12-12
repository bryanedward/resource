import express, {json} from 'express';
import morgan from 'morgan';
import fs from 'fs';

//importing routes
import user from './routes/UserRouter';
import publication from './routes/PublicationRouter';
import message from './routes/MessageRouter';
import like from './routes/LikesRouter';

//initialization
const app = express();
const photos = __dirname+'/photos';


//middlewares
app.use(morgan('dev'));
app.use(json());




//routers
app.use('/photos',express.static(photos));



app.use('/dev/user',user);
app.use('/dev/publications',publication);
app.use('/dev/messages',message);
app.use('/dev/likes',like);



export default app;
