import _ from 'lodash';
import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from "../constants/actionTypes";
import { getMessages } from "../static-data";


export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
    let {activeUserId, message} = action.payload;
    if(!message) return state;
    let activeUserMessages = state[activeUserId];
    let newId = Number(Object.keys(activeUserMessages).pop()) + 1;

      return ({
        ...state,
        [activeUserId]: {
          ...activeUserMessages,
          [newId]: {
            number: newId,
            text: message,
            is_user_msg: true
          }
        }
      });
    case DELETE_MESSAGE:
      let {number} = action.payload;
      ({activeUserId} = action.payload);
      activeUserMessages = {...state[activeUserId]};
      delete activeUserMessages[number];
      return ({
        ...state,
        [activeUserId]: activeUserMessages
      });
    case EDIT_MESSAGE:
    ({number, activeUserId, message} = action.payload);
    activeUserMessages = _.cloneDeep(state[activeUserId]);
    activeUserMessages[number].text = message;
    return ({
      ...state,
      [activeUserId]: activeUserMessages
    });
    default:
    return state;
  }
}
