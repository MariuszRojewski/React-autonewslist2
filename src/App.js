import React, { Component } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "1.) Lorem Ipsum",
    body:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    id: 2,
    title: "2.) Lorem Ipsum",
    body:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

setInterval(() => {
  const currentDataID = data.length + 1;

  data.push({
    id: currentDataID,
    title: `${currentDataID}.) Lorem Ipsum`,
    body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  });
}, 2000);

class App extends Component {
  state = {
    dataItems: [...data],
  };

  getData = () => {
    if (this.state.dataItems.length !== data.length) {
      console.log("Trwa aktualziacja danych");
      this.setState({
        dataItems: [...data],
      });
    } else {
      console.log("Dane sa bez zmian");
    }
  };

  componentDidMount() {
    setInterval(this.getData, 500);
  }

  render() {
    const items = this.state.dataItems.map((item) => {
      const newMsgID = this.state.dataItems.length;
      return (
        <div className="lorem" key={item.id}>
          <h2>
            {item.title}
            {item.id === newMsgID ? " - new message" : ""}
          </h2>
          <p>{item.body}</p>
        </div>
      );
    });

    return (
      <>
        <h1>Automatyczna lista wpisów</h1>
        <div className="wrapper">{items.reverse()}</div>
      </>
    );
  }
}

export default App;
