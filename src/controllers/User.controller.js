import User from '../models/UserModels';
import bcrypt from 'bcryptjs';
import jwtoken from 'jsonwebtoken';
import fs from 'fs';
import Path from 'path';
import url from 'url';

export async function getImage(req, res){
  // TODO: especificar el tipo de dato en este caso es una imagen/jpg
  res.writeHead(200,{'content-type':'image/jpg'});
  fs.createReadStream('src/photos/'+req.params.photoUser).pipe(res);
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
    // TODO: -- obtener la direccion donde se guarda la foto
    const urlPhoto = req.files.photo.path;

    const reqUrl = url.format({
      // TODO: ------ se obtiene la url del metodo createUser-----
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    });


    const data = await User.findOne({
        where: {
            emailuser: emailUser
        }
    });
    if (data == null) {
        const {nameUser, emailUser, roleUser} = req.body;
        // TODO: ------- se usa el bcrpyt para encriptar la passwor-----
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(req.body.passUser, salt);

        // TODO: -------obtener la extension para verificacion
        const imgSplit = urlPhoto.split('\\');
        //const imgSplit = urlPhoto.split('\/');
        const fileName = imgSplit[2];
        const extImg = fileName.split('\.');
        const extName = extImg[1];

        // TODO: ------Se crea la url donde estara la imagen del usuario -----------
        const reqUrlSplit = reqUrl.split('\/');
        const photoUser = reqUrlSplit[0]+'//'+reqUrlSplit[1]+''
        +reqUrlSplit[2]+'/'+reqUrlSplit[3]+'/'+reqUrlSplit[4]+'/image/'+fileName

        if(extName == 'png' || extName == 'jpg' || extName == 'jpeg'){
          try {
              const newUser = await User.create({
                  nameuser : nameUser,
                  emailuser : emailUser,
                  roleuser: roleUser,
                  passuser : bcryptPassword,
                  photouser : photoUser
              },{
                fields: ['nameuser','emailuser','passuser','roleuser','photouser']
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
        else {
          fs.unlink(urlPhoto, (err) => {
            res.status(400).send({
              message: " foto"
            });
          });
        }
    } else {
      fs.unlink(urlPhoto, (err) => {
        res.status(400).send({
          message: "el email ya existe"
        });
      });
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
