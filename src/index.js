import app from './app';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

async function main(){
    await app.listen(2000);
    console.log('server on port 2000');
}


main();