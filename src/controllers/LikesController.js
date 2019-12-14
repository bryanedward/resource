import Likes from '../models/LikesModels';
import Message from '../models/MessagesModels';
import User from '../models/UserModels';
import Complemeint from '../models/ComplemeintModels';


export async function getLikes(req,res){

  Likes.belongsTo(Message);
  Likes.belongsTo(User);
  const allLikes = await Likes.findAll({
    include:[Message,User]
  });
  res.json({allLikes});
}



export async function createLikes(req,res){
  // TODO: crear el like en la tabla y actualizar la tabla de los mensajes
  const {messageId} = req.body;

  try {
    const findLikes = await Likes.findAll({
      where:{userIduser : req.user.id}
    });

    // if (Object.entries(findLikes).length === 0) {
    //   //comrpobar si un objeto esta vacio
    //   await Likes.create({
    //     messageIdmessage : messageId,
    //     userIduser : req.user.id
    //   },{
    //     fields:['messageIdmessage','userIduser']
    //   });
    //   res.json({message:"creado"});
    // }else{
    var pass = true;
      for (var variable of findLikes) {

        if(variable.messageIdmessage == messageId){
          res.json({message:"ya distes like "})
          pass = false;
        }
      }

      if (pass) {
        await Likes.create({
          messageIdmessage : messageId,
          userIduser : req.user.id
        },{
          fields:['messageIdmessage','userIduser']
        });
        const dataUpdate = await Message.findOne({
            where:{
              idmessage:messageId
            }
        });
        var countlike = 1 + dataUpdate.likepublication;


        await Message.update({
          likepublication : countlike
        },{
          where:{idmessage:messageId}
        });
        res.json({message:"gracias por su like"});
      }
    //}
  } catch (e) {
  //  console.log(e);
  }
}




export async function createComplemeint(req,res){
// TODO: crear la denuncia y actualizar la table de los mensajes
  const { complemeintId } = req.body;
  try {

    var passComplemeint = true;
    const complemeintsAll = await Complemeint.findAll({
      where:{userid : req.user.id}
    });
    for (var variable of complemeintsAll) {
      if (variable.messageid == complemeintId) {
        res.json({message:"ya hicistes la denuncia"})
        passComplemeint = false;
      }
    }
    if (passComplemeint) {
      await Complemeint.create({
        messageid : complemeintId,
        userid : req.user.id
      },{
        fields:['messageid','userid']
      });
      const dataMessage = await Message.findOne({
          where:{
            idmessage : complemeintId
          }
      });

      var counts = 1 + dataMessage.complemeints;


      await Message.update({
        complemeints : counts
      },{
        where:{idmessage:complemeintId}
      });
      res.json({message:"gracias por su denuncia"});
    }

  } catch (e) {

  }
}
