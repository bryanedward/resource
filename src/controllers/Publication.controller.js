import Publication from '../models/PublicationModels';
import User from '../models/UserModels';



export async function getPublications(req, res) {
    // TODO: obtener todas las publicaciones identificandose con el jwt
    const publications = await Publication.findAll({
        attributes: ['idpublication', 'namepublication', 'descriptpublication',
        'levelsubject','userid'],
        order: [
            ['idpublication', 'DESC']
        ]
    });
    res.json({publications});
}

















export async function createPublication(req, res) {
    // TODO: crear una publicacion con el jwt para identificarse
    const { namePublication, descriptPublication, levelSubject} = req.body;

    await Publication.create({
      namepublication : namePublication,
      descriptpublication : descriptPublication,
      levelsubject : levelSubject,
      userid : req.user.id
    },{
      fields: ['namepublication', 'descriptpublication',
       'levelsubject', 'userid']
    });
    res.json({
        message: 'publicacion creada con exito'
    });
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



export async function updatePublication(req, res) {
    //ACTUALIZAR UN PublicationO
    const { id } = req.params;
    const { namePublication, description, Userid, urlimg } = req.body;

    /*const tasks = await Publication.findOne({
        attributes: ['namePublication', 'description', 'Userid', 'id', 'urlimg'],
        where: { id }
    });*/
    const updatedTask = await Publication.update({
        namePublication,
        description,
        Userid,
        urlimg
    }, {
            where: { id }
        });
    res.json({
        message: 'Publication updated',
        updatedTask
    });
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



export async function getUserDouble(req, res) {
    //FUNCTION USER WITH ALL THE PublicationSS

     Publication.belongsTo(User, {foreignKey: 'userid'});
     var iterable = await User.findAll();
     var publication = new Array();
     for (var variable of iterable) {
        var data = await Publication.findAll({
        attributes:[
          'idpublication','userid','namepublication', 'descriptpublication'
        ],
         include:[{
           model:  User, attributes:['nameuser','emailuser','roleuser','iduser'],
           where: {'iduser': variable.iduser}
         }]
      });
      publication.unshift(data);
     }

    //res.send(Object.assign(publication[1],publication[0]));
    res.json({publication});

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
