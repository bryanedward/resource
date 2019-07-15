import Client from '../models/ClientModels';


export async function getClients(req, res) {
    //OBTENER TODOS LOS CLIENTES
    try {
        const projects = await Client.findAll();
        res.json({
            projects
        });
    } catch (error) {
        console.log(error);
    }
};


export async function updatemethod(req, res) {
    //NUEVO FUNCION PARA VERIFICAR UN USUARIO Y CREAR UN CLIENTE
    const { email } = req.body;
    
    const data = await Client.findOne({
        where: {
            email
        }
    })
    if (data == null) {
        const { name, phone, email, city , urlimg} = req.body;
        try {
            let newProject = await Client.create({
                name,
                phone,
                email,
                city,
                urlimg
            }, {
                    fields: ['name', 'phone', 'email', 'city', 'urlimg']
                });

            if (newProject) {
                res.json({
                    message: 'new account',
                    data: newProject
                })
                return
            }

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Something goes wrong",
                data: {}
            });
        }
    } else {
        res.json({
            message: 'error account'
        })
    }
}



/*
export async function createClients(req, res) {
    //CREAR UN CLIENTE
    const { name, phone, email, city } = req.body;

    try {
        let newProject = await Client.create({
            name,
            phone,
            email,
            city
        }, {
                fields: ['name', 'phone', 'email', 'city']
            });

        if (newProject) {
            res.json({
                message: "client created successsfully !!",
                data: newProject
            });
            return
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};
*/


export async function getOneClient(req, res) {
    //OBTENER UN CLIENTE
    const { email } = req.params;
    console.log(email)
    const project = await Client.findOne({
        where: {
            email
        }
    });
    if (project == null) {
        res.json({ message : 'nothing'})
    } else {
        res.json({ project})
    }

};


export async function deleteClient(req, res) {
    //BORRAR UN CLIENTE
    try {
        const { id } = req.params;
        const deleteRowCount = await Client.destroy({
            where: {
                id
            }
        });
        res.json(deleteRowCount)
    } catch (error) {
        console.log(error);
    }
};



export async function updateClient(req, res) {
    //ACTUALIZAR UN CLIENTE
    const { id } = req.params;
    const { name, phone, email, city } = req.body;

    const projects = await Client.findAll({
        attributes: ['id', 'name', 'phone', 'email', 'city'],
        where: {
            id
        }
    });

    if (projects.length > 0) {
        projects.forEach(async element => {
            await element.update({
                name,
                phone,
                email,
                city
            });
        });
    }

    return res.json({
        message: 'Project updated succesfully',
        data: projects
    });

};

