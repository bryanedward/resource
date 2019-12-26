import Publication from '../models/PublicationModels';
import User from '../models/UserModels';



export async function getPublications(req, res) {
    // TODO: obtener todas las publicaciones identificandose con el jwt
    const publications = await Publication.findAll({include:[User],
      order:[['idpublication','DESC']]});
      res.json({publications})
}





export async function createPublication(req, res) {
    // TODO: crear una publicacion con el jwt para identificarse
    const { namePublication, descriptPublication, levelSubject} = req.body;

    await Publication.create({
      namepublication : namePublication,
      descriptpublication : descriptPublication,
      levelsubject : levelSubject,
      userIduser : req.user.id
    },{
      fields: ['namepublication', 'descriptpublication',
       'levelsubject', 'userIduser']
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































export async function test(req,res){

}











export async function getOnePublication(req, res) {
    //OBTENER UN PublicationO
    const { id } = req.params;
    const tasks = await Publication.findOne({
        where: { id },
        attributes: ['id', 'namePublication', 'description', 'Userid', 'urlimg']
    });
    res.json(tasks);
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
