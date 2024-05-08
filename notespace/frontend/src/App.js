import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = { details: [] };
  componentDidMount() {
    let data;
    axios
      .get("http://127.0.0.1:8000/api/v1/diary/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <p>{output.title}</p>
              <p>{output.author}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
