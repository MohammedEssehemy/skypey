import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SET_EDIT_MESSAGE,
  EDIT_MESSAGE
} from "../constants/actionTypes";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, activeUserId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    activeUserId
  }
});

export const deleteMessage = (number, activeUserId) => ({
  type: DELETE_MESSAGE,
  payload: {
    number,
    activeUserId
  }
});

export const setEditMessage = (number) => ({
  type: SET_EDIT_MESSAGE,
  payload: number
});


export const editMessage = (message, activeUserId, number) => ({
  type: EDIT_MESSAGE,
  payload: {
    message,
    activeUserId,
    number
  }
});
