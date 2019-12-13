import Likes from '../models/LikesModels';
import Message from '../models/MessagesModels';
import User from '../models/UserModels';


export async function getLikes(req,res){

  Likes.belongsTo(Message);
  Likes.belongsTo(User);
  const allLikes = await Likes.findAll({
    include:[Message,User]
  });
  res.json({allLikes});
}



export async function createLikes(req,res){
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
          res.json({message:"no se puede"})
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
        res.json({message:"actualizado y creado el like"});
      }




    //}
  } catch (e) {
  //  console.log(e);
  }
}
