import React from 'react';
import store from './../store';
import {deleteMessage, setTypingValue, setEditMessage} from './../actions';
import './Chat.css';

const handleDeleteMessage = (number) => {
  let {activeUserId} = store.getState();
  store.dispatch(deleteMessage(number, activeUserId));
}

const handleEditMessage = (number, text) => {
  let {activeUserId} = store.getState();
  store.dispatch(setEditMessage(number));
  store.dispatch(setTypingValue(text))
}

const Chat = ({ message }) => {
  const { text, is_user_msg, number } = message;

  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onClick={()=>is_user_msg && handleEditMessage(number, text) }>{text}
      {is_user_msg &&  <button className='deleteBtn' onClick={()=>handleDeleteMessage(number)}>X</button>}
    </span>
  );
}

export default Chat;
