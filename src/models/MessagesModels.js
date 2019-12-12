import Sequelize, { INTEGER } from 'sequelize';
import {sequelize} from '../database/databaseLocal';
import Publication from './PublicationModels';

const Message  = sequelize.define('messages',{
  idmessage:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  messageuser:{
    type: Sequelize.TEXT
  },
  userIduser:{
    type: Sequelize.INTEGER
  },
  likepublication:{
    type: Sequelize.INTEGER
  },
  publicationid:{
    type: Sequelize.INTEGER
  }
},{
  timestamps:false
});


export default Message;
