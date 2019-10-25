import Sequelize, { INTEGER } from 'sequelize';
import { sequelize } from '../database/database';

const Publication = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    namePublication: {
        type: Sequelize.TEXT
    },
    descripPublication: {
        type: Sequelize.TEXT
    },
    userId: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });

export default Publication;
