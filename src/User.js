import React, { Component } from "react";
import Api from "./api";
import LoadingScreen from "./LoadingScreen";

class User extends Component {
  state = {
    data: null,
    load: true,
    error: ""
  };
  async componentDidMount() {
    const user = await Api.geUser(this.props.routeParams.id);
    this.setState({
      data: user,
      load: false,
      error: ""
    });
  }

  renderUser = () => {
    if (this.state.data) {
      return this.state.data.name;
    }
  };

  renderFoodPreferences = () => {
    if (this.state.data) {
      return this.state.data.foodPreferences.map(food => (
        <li key={food.id}>{food.name}</li>
      ));
    }
  };

  render() {
    if (this.state.load) {
      return <LoadingScreen />;
    }
    return (
      <div>
        {this.renderUser()}
        <ul>{this.renderFoodPreferences()}</ul>
      </div>
    );
  }
}

export default User;
