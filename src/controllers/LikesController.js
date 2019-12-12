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

  await Likes.create({
    messageIdmessage : messageId,
    userIduser : req.user.id
  },{
    fields:['messageIdmessage','userIduser']
  });
  res.json({message:"creado el like"})
}
