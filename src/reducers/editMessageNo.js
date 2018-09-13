import { SET_EDIT_MESSAGE } from '../constants/actionTypes'
export default (state = null, action) => {
  switch(action.type){
    case SET_EDIT_MESSAGE:
    return action.payload;
    default:
    return state;
  }
};
