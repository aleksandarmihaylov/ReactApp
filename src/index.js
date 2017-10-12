import React from "react";
import ReactDOM from "react-dom";
import { hashHistory, Router, Route } from "react-router";
import App from "./App"; //multiple user component
import User from "./User"; //single user component
import registerServiceWorker from "./registerServiceWorker";

const RouteComponent = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/users" component={App} />
      <Route path="/users/:id" component={User} />
    </Router>
  );
};

ReactDOM.render(<RouteComponent />, document.getElementById("root"));
registerServiceWorker();
