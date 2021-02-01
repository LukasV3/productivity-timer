import React from "react";

const Timer = () => {
  return (
    <div className="ui center aligned container" style={{ marginTop: "20px" }}>
      <div className="ui basic buttons">
        <div className="ui button active">Focus</div>
        <div className="ui button">Short Break</div>
        <div className="ui button">Long Break</div>
      </div>
      <div className="ui header" style={{ fontSize: "6rem", margin: "30px" }}>
        10:00
      </div>
      <button className="ui huge basic black button">START</button>
    </div>
  );
};

export default Timer;
