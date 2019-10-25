import User from '../models/UserModels';
import bcrypt from 'bcryptjs';
import jwtoken from 'jsonwebtoken';
import fs from 'fs';
import Path from 'path';

export async function getImage(req, res){
  // TODO: especificar el tipo de dato en este caso es una imagen/jpg
  res.writeHead(200,{'content-type':'image/jpg'});
  fs.createReadStream('src/photos/profile.jpg').pipe(res);

}


export async function getUsers(req, res) {
    //OBTENER TODOS LOS UserES
    try {
        const users = await User.findAll();
        res.json({
            users
        });
    } catch (error) {
        console.log(error);
    }
};


export async function createUser(req, res) {
    //NUEVO FUNCION PARA VERIFICAR UN USUARIO Y CREAR UN UserE

    const { email } = req.body;
    const data = await User.findOne({
        where: {
            email
        }
    })
    if (data == null) {
        const {nameUser, emailUser, passUser} = req.body;

        //usar el bcrpyt para encriptar la password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.pass, salt);

        // TODO: verificar si es una foto
        const urlPhoto = req.files.photo.path;
        const imgSplit = urlPhoto.split('\\');
        const fileName = imgSplit[2];
        const extImg = fileName.split('\.');
        const extName = extImg[1];

        if(extName == 'png' || extName == 'jpg' || extName == 'jpeg'){
          try {
              let newProject = await User.create({
                  name,
                  phone,
                  email,
                  city,
                  urlimg : fileName,
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
              res.status(500).json({
                  message: "Something goes wrong"
              });
          }
        }else {

        }



    } else {
        res.json({
          message: 'the email exists'
        })
    }


}


export async function getOneUser(req, res) {
    //OBTENER UN UserE
    const email = req.body.email;
    const project = await User.findOne({
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
    const data = await User.findOne({
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


export async function authToken (req, res){
    //update autotoken
    const phone = req.body.phone;
    const updateData = await User.findAll({
        where:{
            email: req.body.email
        }
    });
    if(updateData.length > 0){
        updateData.forEach(async element => {
            await element.update({
                phone: phone

            });
        });
    }
    res.json(updateData)
}


export async function deleteUser(req, res) {
    //delete the  User
    try {
        const { id } = req.params;
        const deleteRowCount = await User.destroy({
            where: {
                id
            }
        });
        res.json(deleteRowCount)
    } catch (error) {
        console.log(error);
    }
};


export async function updateUser(req, res) {
    //ACTUALIZAR UN UserE
    const { id } = req.params;
    const { name, phone, email, city } = req.body;

    const projects = await User.findAll({
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
