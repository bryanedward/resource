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
    // TODO: obtener todos los usuarios
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
  // TODO: crear un nuevo usuario verificando si el correo existe
    const { emailUser } = req.body;
    const data = await User.findOne({
        where: {
            emailuser: emailUser
        }
    });
    if (data == null) {
        const {nameUser, emailUser, roleUser} = req.body;
        //usar el bcrpyt para encriptar la password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.passUser, salt);
        // TODO: verificar si es una foto
        const urlPhoto = req.files.photo.path;
        const imgSplit = urlPhoto.split('\\');
        const fileName = imgSplit[2];
        // TODO: fileName es la ruta donde se guarda la foto
        const extImg = fileName.split('\.');
        const extName = extImg[1];
        if(extName == 'png' || extName == 'jpg' || extName == 'jpeg'){
          try {
              const newUser = await User.create({
                  nameuser : nameUser,
                  emailuser : emailUser,
                  roleuser: roleUser,
                  passuser : bcryptPassword
              },{
                fields: ['nameuser','emailuser','passuser','roleuser']
              });

              if(newUser){
                res.json({
                  newUser
                });
              }
          } catch (error) {
              res.status(500).json({
                  message: "no se pudo crear el usuario"
              });
          }
        }
    } else {
        res.json({
          message: 'el correo existe'
        })
    }
}


export async function getOneUser(req, res) {
    // TODO: buscar el usuario con el email
    const {email} = req.params;
    const dataUser = await User.findOne({
         where: {
             emailuser: email
         },
    });
    if (dataUser == null) {
        res.json({ message: 'nothing' })
    } else {
        res.json({ dataUser })
    }
}



export async function login (req, res){
    //login of user and the password

    const  {emailUser, passUser} = req.body;

    console.log(emailUser);
    const data = await User.findOne({
        where:{
            emailuser : emailUser
        },
    });

    if(!data){
     res.json('email no existe');
    }else {
      //use the method compare for get the pass without encrypt
      const pass = await bcrypt.compare(req.body.pass, data.passuser);
      console.log(pass);
      if(!pass) res.json('password is incorrect');

      //create assign token
      const token = jwtoken.sign({id: data.iduser}, process.env.SECRET_TOKEN);
      res.header('auto-token', token).send(token);
    }

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
