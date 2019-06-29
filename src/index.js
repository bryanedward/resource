import app from './app';
import '@babel/polyfill';

async function main(){
    await app.listen(3000);
    console.log('hello server on port 000');
}


main();