import Sequelize, { INTEGER } from 'sequelize';
import User from './UserModels';
import { sequelize } from '../database/databaseLocal';

const Publication = sequelize.define('publications', {
    idpublication: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    namepublication: {
        type: Sequelize.TEXT
    },
    descriptpublication: {
        type: Sequelize.TEXT
    },
    levelsubject:{
      type: Sequelize.INTEGER
    },
    userIduser: {
        type: Sequelize.INTEGER
    },
    photopublt:{
      type: Sequelize.TEXT
    }
}, {
        timestamps: false
    });





export default Publication;
