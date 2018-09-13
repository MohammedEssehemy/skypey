import React from 'react';
import {setTypingValue, sendMessage, setEditMessage, editMessage} from './../actions/index';
import store from './../store';
import './MessageInput.css';

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId, editMessageNo } = state;
    if(!editMessageNo) store.dispatch(sendMessage(typing, activeUserId));
    else {
      if(typing) store.dispatch(editMessage(typing, activeUserId, editMessageNo));
      store.dispatch(setEditMessage(null));
    }
  };
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message" onSubmit={handleSubmit} >
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
}



export default MessageInput;
