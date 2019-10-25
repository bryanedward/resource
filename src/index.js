import app from './app';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

async function main(){
    await app.listen(1000);
    console.log('server on port 1000');
}


main();
