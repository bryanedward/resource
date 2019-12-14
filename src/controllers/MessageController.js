import Message from '../models/MessagesModels';
import Publication from '../models/PublicationModels';
import User from '../models/UserModels';
import Like from '../models/LikesModels';

export async function getMessagePublications(req,res){
  const {idpublication} = req.params;
  // TODO: obtenemos el id de la pregunta y buscamos en la tabla de la base datos
  Message.belongsTo(User);
  const messages = await Message.findAll({
    include:[User],
    order:[['idmessage','DESC']],
    where:{ 'publicationid': idpublication}
  })
  res.json({messages});
};





export async function postMessagesPublications(req,res){
  //se obtiene el token para asignar el id del usuario y los parametros para la creacion de
  //del nuevo mensaje
  const { messageuser, messageid} = req.body;
  await Message.create({
    messageuser: messageuser,
    userIduser: req.user.id,
    publicationid : messageid,
    likepublication :0,
    complemeints : 0

  },{
    fields:['messageuser','userIduser','publicationid','likepublication','complemeints']
  });
  res.json({
    message: 'mensaje creado'
  });
};

export async function deleteMessagePublications(req,res){
  //eliminar un mensaje
  try {
      const { idmessage } = req.params;

      await Like.destroy({
        where:{
          messageIdmessage: idmessage
        }
      });

      const deleteRowCount = await Message.destroy({
          where: {
              idmessage:idmessage
          }
      });

      res.json("eliminado")


  } catch (error) {
      console.log(error);
  }
}




export async function updateMessagePublications(req,res){
  try {
    const {idmessage, likePublication } = req.body;

    await Message.update({
      likepublication : likePublication
    },{
      where:{idmessage: idmessage}
    });
    res.json("actualizado")
  } catch (e) {
    console.log(e);
  }
}
