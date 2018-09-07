import React from 'react';
import Empty from './Empty';
import ChatWindow from './../containers/ChatWindow';
import './Main.css';

const Main = ({user,activeUserId}) => {
  let innerContent = () => {
    if(!activeUserId){
      return <Empty user={user} activeUserId={activeUserId} />
    }else {
      return <ChatWindow activeUserId={activeUserId}/>;
    }
  }
  return <main className='Main'>{innerContent()}</main>
};

export default Main;
