import React, { Component } from "react";
import "./MainContent.css";
import Summary from "../../components/Summary";
import ChatBox from "../../components/ChatBox";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      chat: { chatStatus: {}, user_one: {}, user_two: {} }
    };
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount = () => {
    fetch("https://api.randomuser.me/?nat=us&results=20")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail,
          userName: user.login.username
        }))
      )
      .then(contacts => this.setState({ contacts }));
  };

  setValue(value) {
    let chat = { ...this.state.chat };
    chat.user_one = value;
    this.setState({
      chat: chat
    });

    console.log(this.state.chat.user_one.email);
  }

  render() {
    return (
      <div className="row">
        <div className="column side">
          <ChatBox />{" "}
        </div>
        <div className="column middle">
          <Summary setValue={this.setValue} contacts={this.state.contacts} />
        </div>
        <div className="column side">
          <ChatBox />{" "}
        </div>
      </div>
    );
  }
}

export default MainContent;
