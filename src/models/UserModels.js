import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import publication from './PublicationModels';

const User = sequelize.define('users', {
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nameUser: {
        type: Sequelize.TEXT
    },
    emailUser: {
        type: Sequelize.TEXT
    },
    passUser:{
        type: Sequelize.TEXT
    }
}, {
        timestamps: false
    });

User.hasMany(publication, { foreingKey: 'userId', sourceKey: 'idUser' });
// TODO: el foreingKey hace relacion con la llave foranea del modelo publicacion
// TODO: y ek sourceKey hace referencia al id de la clase modelo idUser
publication.belongsTo(User, { foreingKey: 'userId', sourceKey: 'idUser' });

export default User;
