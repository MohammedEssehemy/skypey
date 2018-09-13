import React, { Component } from "react";
import Chat from './../containers/Chat';
import "./Chats.css";


class Chats extends Component {

  scrollToBottom(){
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }


  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
