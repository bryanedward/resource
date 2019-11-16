import Message from '../models/MessagesModels';
import Publication from '../models/PublicationModels';


export async function getMessagePublications(req,res){
  const {idpublication} = req.params;
  // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos

  const messages = await Message.findAll({

    attributes:['messageuser'],
    where:{publicationid: idpublication }
  });



  res.json({messages})
};
