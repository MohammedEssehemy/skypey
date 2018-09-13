import {combineReducers} from 'redux';
import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';
import editMessageNo from './editMessageNo';



export default combineReducers({
  user,
  messages,
  typing,
  contacts,
  editMessageNo,
  activeUserId
});
