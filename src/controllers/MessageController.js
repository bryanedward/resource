import Message from '../models/MessagesModels';
import Publication from '../models/PublicationModels';


export async function getMessagePublications(req,res){
  const {idpublication} = req.params;
  // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos
  const messages = await Message.findAll({
    attributes:['messageuser', 'userid', 'publicationid'],
    where:{publicationid: idpublication }
  });
  res.json({messages});
};





export async function postMessagesPublications(req,res){
  //se obtiene el token para asignar el id del usuario y los parametros para la creacion de
  //del nuevo mensaje
  const { messageuser, messageid } = req.body;
  await Message.create({
    messageuser: messageuser,
    userid: req.user.id,
    publicationid : messageid
  },{
    fields:['messageuser','userid','publicationid']
  });
  res.json({
    message: 'mensaje creado'
  });

};
