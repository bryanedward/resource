import app from './app';

import '@babel/polyfill';

async function main(){
    await app.listen(2000);
    console.log('server on port 1000');
}


main();