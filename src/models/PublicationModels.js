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
    userid: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });

    //Publication.belongsTo(User, { foreingKey: 'userid', sourceKey: 'userid' });



export default Publication;
