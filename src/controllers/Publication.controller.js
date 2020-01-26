import Publication from '../models/PublicationModels';
import User from '../models/UserModels';
import url from 'url';
import fs from 'fs';



export async function getPublications(req, res) {
    // TODO: obtener todas las publicaciones identificandose con el jwt
    const publications = await Publication.findAll({include:[User],
      order:[['idpublication','DESC']]});
      res.json({publications})
}


export async function getImage(req, res){
  // TODO: especificar el tipo de dato en este caso es una imagen/jpg
  res.writeHead(200,{'content-type':'image/jpg'});
  fs.createReadStream('src/publications/'+req.params.photopublt).pipe(res);

}


export async function createPublication(req, res) {
    // TODO: crear una publicacion con el jwt para identificarse
    // TODO: url donde seguardo la foto
    var photo;
    const urlPhotoPublications = req.files.photo;

    console.log(urlPhotoPublications);

    const reqUrl = url.format({
      // TODO: ------ se obtiene la url del metodo createUser-----
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    });




    const { namePublication, descriptPublication, levelSubject, iduser} = req.body;
    var userid = parseInt(iduser);
    var level = parseInt(levelSubject);

    if (urlPhotoPublications == null) {
      photo = null;

      createPost(namePublication, descriptPublication, level, photo, userid, res);
    }else {
      photo = urlPhotoPublications.path;

      //const imgSplit = photo.split('\\');
      const imgSplit = photo.split('\/');
      const fileName = imgSplit[2];
      const extImg = fileName.split('\.');
      const extName = extImg[1];

      const reqUrlSplit = reqUrl.split('\/');
      photo = reqUrlSplit[0]+'//'+reqUrlSplit[1]+''
      +reqUrlSplit[2]+'/'+reqUrlSplit[3]+'/'+reqUrlSplit[4]+'/image/'+fileName;
      createPost(namePublication, descriptPublication, level, photo, userid, res);
    }
}



function createPost(namePublication, descriptPublication, level, photo, userid, res){

   Publication.create({
    namepublication : namePublication,
    descriptpublication : descriptPublication,
    levelsubject : level,
    photopublt : photo,
    userIduser : userid
  },{
    fields: ['namepublication', 'descriptpublication',
     'levelsubject', 'userIduser', 'photopublt']
  });
  res.json({
      message: 'publicacion creada con exito'
  });
}




export async function updatePublication(req, res) {
    // TODO: actualizar las publicaciones
    const { idpublication ,namepublication, descriptpublication } = req.body;

    const updatedTask = await Publication.update({
        namepublication,
        descriptpublication,

    }, {
            where: { idpublication }
        });
    res.json({
        message: 'actualizado con exito'
    });
}



export async function getOnePublication(req, res) {
    // TODO: obtener publicaciones por el nivel
    const { levelsubject } = req.params;
    const publications = await Publication.findAll({include:[User],
      order:[['idpublication','DESC']],
      where:{levelsubject}
    });
    res.json({publications});
}



















export async function deletePublication(req, res) {
    //BORRAR PublicationO
    const { id } = req.params;
    await Publication.destroy({
        where: {
            id
        }
    });
    res.json({ message: 'Publication deleted' });
}



export async function getPublicationByUserid(req, res) {
    //OBTENER PublicationO POR ID UserE
    const { Userid } = req.params;
    const tasks = await Publication.findAll({
        attributes: ['id', 'Userid', 'namePublication', 'description', 'urlimg'],
        where: { Userid }
    });
    res.json({Publication:tasks});
}



export async function getUser(req, res) {
    //FUNCTION USER WITH ALL THE PublicationS
    const { Userid } = req.params;

    const cli = await User.findOne({
        attributes: ['name', 'phone', 'email', 'urlimg'],
        where: { id: Userid }
    });
    const produ = await Publication.findAll({
        attributes: ['namePublication', 'description', 'urlimg'],
        where: { Userid }
    })
    res.json(
         produ
    )
}






export async function getUpdate(req, res) {
    //NEW FUNCTION FIND USER WITH EL UserID
    const { user } = req.params;
    const results = await User.findOne({
        where: {
            id: user
        }
    })

    res.json(results);


}
