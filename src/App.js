import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/search/search";
import List from "./components/list/list";

export default class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
    isFirst: true,
    error: "",
  };

  updateAppState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search updateAppState={this.updateAppState} />
        </section>
        <List {...this.state} />
      </div>
    );
  }
}
