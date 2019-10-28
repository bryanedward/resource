import Sequelize, { INTEGER } from 'sequelize';
import { sequelize } from '../database/database';

const Publication = sequelize.define('publications', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    namepublication: {
        type: Sequelize.TEXT
    },
    descriptpublication: {
        type: Sequelize.TEXT
    },
    userid: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });

export default Publication;
