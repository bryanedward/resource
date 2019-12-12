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

  //Message.hasMany(Publication,{foreingKey:'idmessage', sourceKey:'idmessage'});
  //Message.belongsTo(Publication, {targetKey:'publicationid', sourceKey:'idmessage' });


export default Message;
