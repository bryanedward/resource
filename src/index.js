import app from './app';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

async function main(){
    await app.listen(4000);
    console.log('server on port 4000');
}


main();
