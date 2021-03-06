import {SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE} from '../constants/actionTypes';

export default (state = '', action)=> {
  switch(action.type) {
    case SET_TYPING_VALUE:
    return action.payload;
    case SEND_MESSAGE:
    case EDIT_MESSAGE:
    return '';
    default:
    return state;
  }
}
