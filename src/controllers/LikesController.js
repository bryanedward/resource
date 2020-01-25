import Likes from '../models/LikesModels';
import Message from '../models/MessagesModels';
import User from '../models/UserModels';
import Points from '../models/PointsModels';
import Complemeint from '../models/ComplemeintModels';
import Sequelize from 'sequelize';


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


         const tablePoints = await Points.findOne({
           where:{userIduser: dataUpdate.userIduser}
         });
         var limitpoint = 1 + tablePoints.pointlimit;
         var pointcant = tablePoints.cantpoint;
         if (limitpoint >= 25) {
           limitpoint = 0;
           pointcant = pointcant + 1;
         }

         await Points.update({
           pointlimit:limitpoint,
           cantpoint: pointcant
         },{
           where:{
             userIduser: tablePoints.userIduser}
         });



        await Message.update({
          likepublication : countlike
        },{
          where:{idmessage:messageId}
        });
        res.json({message:"gracias por su like"});
      }

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



export async function getComplemeint(req,res){
  // TODO: importo Op de Sequelize para buscar las denuncias masyores de 1
  const Op = Sequelize.Op;

  Message.belongsTo(User);
  const complemeints = await Message.findAll({
    include:[User],
    order:[['complemeints','DESC']],
    where: {
      complemeints: {
        [Op.gt]: 0
      }
    }
  });

  res.json({complemeints});

}



export async function getLikesByUser(req,res){
  const allLike = await Likes.findAll({
    where:{
      'userIduser':req.user.id
    }
  });

  const countJson = Object.keys(allLike).length;
  // TODO: contar los items que exiten en el json
  if (countJson > 25) {
    res.json({
      message: 1
    });
  }else {
    res.json({
      message: 0
    })
  }
}


export async function lockAccount (req,res){

  const {permiss, iduser} = req.body;

  if (permiss != true) {
      lock(permiss, iduser, res);
  }else {
    lock(permiss, iduser, res);
  }

}


function lock(permiss, iduser, res){
   User.update({
    permiss: permiss
  },{
    where:{
      iduser : iduser
    }
  })
  if (permiss !=true) {
    res.json({message:"la cuenta fue bloqueada!!"})
  }else {
    res.json({message:"la cuenta fue desbloqueda!!"})
  }
}
