import Sequelize, { INTEGER } from 'sequelize';
import {sequelize} from '../database/databaseLocal';

const Message = sequelize.define('messages',{
  idMessage:{
    type: Sequelize.Integer,
    primaryKey: true
  },
  messageUser:{
    type: Sequelize.TEXT
  },
  userId:{
    type: Sequelize.Integer
  },
  publicationId:{
    type: Sequelize.Integer
  }
},{
  timestamps:false
});

export default Message;
