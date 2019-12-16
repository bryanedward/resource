import Sequelize, { INTEGER } from 'sequelize';
import {sequelize} from '../database/databaseLocal';


const Complemeint  = sequelize.define('complemeints',{
  idcomplemeint:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  messageid:{
    type: Sequelize.INTEGER
  },
  userid:{
    type: Sequelize.INTEGER
  }
},{
  timestamps:false
});


export default Complemeint;
