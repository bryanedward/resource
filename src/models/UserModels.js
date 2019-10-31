import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import publication from '../models/PublicationModels';

const User = sequelize.define('users', {
    iduser: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nameuser: {
        type: Sequelize.TEXT
    },
    emailuser: {
        type: Sequelize.TEXT
    },
    passuser: {
        type: Sequelize.TEXT
    },
    roleuser: {
      type: Sequelize.TEXT
    },
    photouser: {
      type: Sequelize.TEXT
    }
}, {
        timestamps: false
    });

User.hasMany(publication, { foreingKey: 'userid', sourceKey: 'iduser' });
// TODO: el foreingKey hace relacion con la llave foranea del modelo publicacion
// TODO: y ek sourceKey hace referencia al id de la clase modelo idUser
publication.belongsTo(User, { foreingKey: 'userid', sourceKey: 'iduser' });

export default User;
