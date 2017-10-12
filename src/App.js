import React, { Component } from "react";
import { Link } from "react-router";
import Api from "./api";
import LoadingScreen from "./LoadingScreen";

class App extends Component {
  state = {
    data: [],
    load: true,
    error: ""
  };
  async componentDidMount() {
    const users = await Api.getUsers();
    this.setState({
      data: users,
      load: false,
      error: ""
    });
  }

  renderUsers = () => {
    if (this.state.data) {
      return this.state.data.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}> {user.name}</Link>
        </div>
      ));
    }
  };
  render() {
    if (this.state.load) {
      return <LoadingScreen />;
    }
    return <div>{this.renderUsers()}</div>;
  }
}

export default App;
