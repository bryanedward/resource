import Sequelize, { INTEGER } from 'sequelize';
import { sequelize } from '../database/database';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nameproduct: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    clientid: {
        type: Sequelize.INTEGER
    },
    urlimg: {
        type: Sequelize.TEXT
    }
}, {
        timestamps: false
    });

export default Product;