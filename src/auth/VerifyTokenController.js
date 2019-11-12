import jwtoken from 'jsonwebtoken';
import config from '../config'


export async function authToken (req, res, next){
  // TODO: obtener el token por el header
  const token = req.header('auto-token');
  // TODO: si no hay token el acceso es denegado
  if(!token) return res.json('acceso denegado')

  try{
    // TODO: comparar el token
    const verified = jwtoken.verify(token, config.SECRET_TOKEN);
    req.user = verified;
    next();
  }catch(error){
    res.json('el token es invalido');
  }
}
