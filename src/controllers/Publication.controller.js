import Publication from '../models/PublicationModels';
import User from '../models/UserModels';


export async function newToken (req, res){
    res.send(req.user)
};

export async function createPublication(req, res) {
    //CREAR UN PublicationO
    const { namePublication, description, Userid, urlimg } = req.body;
    await Publication.create({
        namePublication,
        description,
        Userid,
        urlimg
    }, {
            fields: ['namePublication', 'description', 'Userid', 'urlimg']
        });
    res.json({
        message: 'New Publication created'
    });
}


export async function getPublications(req, res) {
    //OBTENER TODOS LOS PublicationOS
    const tasks = await Publication.findAll({
        attributes: ['id', 'namePublication', 'description', 'Userid', 'urlimg'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({ tasks });
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
    //FUNCTION USER WITH ALL THE PublicationS
    const Publication = await Publication.findAll({
        attributes: ['Userid', 'namePublication', 'description', 'urlimg']
    });
    const User = await User.findAll({
        attributes: ['id', 'name', 'urlimg', 'email', 'city']
    })
    res.json({ Publication, User })
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
