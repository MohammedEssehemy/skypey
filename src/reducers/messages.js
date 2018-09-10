import { SEND_MESSAGE } from "../constants/actionTypes";
import { getMessages } from "../static-data";
export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
    let {activeUserId, message} = action.payload;
    if(!message) return state;
    let activeUserMessages = state[activeUserId];
    let newId = Number(Object.keys(activeUserMessages).pop()) + 1;

      return {
        ...state,
        [activeUserId]: {
          ...activeUserMessages,
          [newId]: {
            number: newId,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
    return state;
  }
}
