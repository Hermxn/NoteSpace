import axios from "axios";
import React from "react";
import "./App.css";
import NoteComponent from "./components/NoteComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <NoteComponent />
      </div>
    );
  }
}

export default App;
