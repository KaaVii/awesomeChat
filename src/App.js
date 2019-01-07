import React, { Component } from "react";
import "./App.css";
import Header from "./containers/header/Header";
import MainContent from "./containers/main/MainContent";
import Footer from "./containers/footer/Footer";
import NavBar from "./containers/navbar/NavBar";

class App extends Component {
  componentDidMount = () => {
    document.title = "Awesome React Chat";
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
