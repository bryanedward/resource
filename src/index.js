import app from './app';
import dotenv from 'dotenv';
import config from './config';

import '@babel/polyfill';

dotenv.config();


async function main(){
    await app.listen(3000);
    console.log('server online');
}


main();
