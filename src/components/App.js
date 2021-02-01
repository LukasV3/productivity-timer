import React from "react";

import Header from "./Header";
import Timer from "./Timer";

const App = () => {
  return (
    <div className="ui text container" style={{ marginTop: "15px" }}>
      <Header />
      <div className="ui divider"></div>
      <Timer />
    </div>
  );
};

export default App;
