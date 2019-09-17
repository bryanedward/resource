import Client from '../models/ClientModels';
import bcrypt from 'bcryptjs';
import jwtoken from 'jsonwebtoken';


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
        const {name, phone, email, city, urlimg} = req.body;
        //usar el bcrpyt para encriptar la password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.pass, salt);
        
        try {
            let newProject = await Client.create({
                name,
                phone,
                email,
                city,
                urlimg,
                pass : bcryptPassword
            }, {
                    fields: ['name', 'phone', 'email', 'city', 'urlimg', 'pass']
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
                message: "Something goes wrong"
            });
        }
    } else {
        res.json({
            message: 'error account'
        })
    }
}


export async function getOneClient(req, res) {
    //OBTENER UN CLIENTE
    const email = req.body.email;
    const project = await Client.findOne({
         where: {
             email
         },
    });
    if (project == null) {
        res.json({ message: 'nothing' })
    } else {
        res.json({ project })
    }

}


export async function login (req, res){
    //login of user and the password
    const data = await Client.findOne({
        where:{
            email : req.body.email
        },
    });
    if(!data) res.json('email not exits')
    //use the method compare for get the pass without encrypt
    const pass = await bcrypt.compare(req.body.pass, data.pass);
    if(!pass) res.json('password is incorrect')

    //create assign token 
    const token = jwtoken.sign({id: data.id}, process.env.SECRET_TOKEN);
    res.header('auto-token', token).send(token);
}


export async function deleteClient(req, res) {
    //delete the  client
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

