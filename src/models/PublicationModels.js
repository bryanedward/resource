import Sequelize, { INTEGER } from 'sequelize';
import { sequelize } from '../database/databaseLocal';
import message from './MessagesModels';

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

    Publication.hasMany(message,{foreingKey:'publicationid', sourceKey:'idpublication'});

    message.belongsTo(Publication, {foreingKey:'publicationid', sourceKey:'idpublication'});

export default Publication;
