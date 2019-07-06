import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import product from './ProductModels';

const Client = sequelize.define('client', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.TEXT
    },
    city: {
        type: Sequelize.TEXT
    }
}, {
        timestamps: false
    });

Client.hasMany(product, { foreingKey: 'clientid', sourceKey: 'id' });
product.belongsTo(Client, { foreingKey: 'clientid', sourceKey: 'id' });

export default Client;