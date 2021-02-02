import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import Timer from "./Timer";
import SettingsForm from "./SettingsForm";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div className="ui text container" style={{ marginTop: "15px" }}>
        <Header />
        <div className="ui divider"></div>
        <Timer />
        <Route path="/settings" exact component={SettingsForm} />
      </div>
    </Router>
  );
};

export default App;
