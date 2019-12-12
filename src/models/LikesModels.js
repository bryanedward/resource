import Sequelize, { INTEGER } from 'sequelize';
import {sequelize} from '../database/databaseLocal';


const Likes = sequelize.define('likes',{
  idlike:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  messageIdmessage:{
    type: Sequelize.INTEGER
  },
  userIduser:{
    type: Sequelize.INTEGER
  }
},{
  timestamps:false
});


export default Likes;
