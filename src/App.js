import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      serch: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ list: user }));
  }
  render() {
    const { list, serch } = this.state;
    const list1 = list.filter((list) =>
      list.name.toLowerCase().includes(serch.toLowerCase())
    );

    return (
      <div className="cl2">
        <div className="cl1">
          <input
            type="text"
            placeholder="Search Monsters By Name"
            onChange={(e) => {
              this.setState({ serch: e.target.value });
              console.log(this.state.serch);
            }}
          />
        </div>
      </div>
    );
  }
}
export default App;
