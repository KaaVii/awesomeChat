import React, { Component } from "react";
import logo from "./logo.svg";
import "./Header.css";

class Haeder extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Sample Chat App</p>
        <a
          className="App-link"
          href="https://github.com/KaaVii"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the source on Git!
        </a>
      </header>
    );
  }
}

export default Haeder;
