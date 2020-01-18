import Sequelize from 'sequelize';
import { sequelize } from '../database/databaseLocal';

const Points = sequelize.define('points',{
  iduser:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  pointlimit:{
    type: Sequelize.INTEGER
  },
  cantpoint:{
    type: Sequelize.INTEGER
  }
},{
  timestamps: false
});

export default Points;
