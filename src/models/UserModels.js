import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import publication from './PublicationModels';

const User = sequelize.define('users', {
    id: {
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

User.hasMany(publication, { foreingKey: 'clientid', sourceKey: 'id' });
publication.belongsTo(User, { foreingKey: 'clientid', sourceKey: 'id' });

export default User;
