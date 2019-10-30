import app from './app';
import dotenv from 'dotenv';
import config from './config';
import '@babel/polyfill';

dotenv.config();

async function main(){
    await app.listen(config.port);
    console.log('server online bryanedward');
}


main();
