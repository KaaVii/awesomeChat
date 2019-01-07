import React, { Component } from "react";
import "./styles.css";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: { message: "", from: "", to: "" },
      messageHistory: [{}]
    };
  }
  render() {
    return (
      <div className="chatbox">
        <h2>ChatBox: {this.props.chatBoxId}</h2>
        <input type="text" />
      </div>
    );
  }
}

export default ChatBox;
