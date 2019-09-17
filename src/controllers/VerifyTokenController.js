import jwtoken from 'jsonwebtoken';

export async function authToken (req, res, next){
    const token = req.header('auto-token');

    if(!token) return res.json('access denied')

    try{
        const verified = jwtoken.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        next();
    }catch(error){
        res.json('error');
    }
}