import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { updateActiveMenu } from "../actions";

const Timer = (props) => {
  const [time, setTime] = useState("");
  const [timerActive, setTimerActive] = useState(false);

  const onMenuClick = (menu) => {
    if (props.activeMenu === menu) return;
    props.updateActiveMenu(menu);
  };

  const renderMenuButtons = () => {
    return ["focus", "shortBreak", "longBreak"].map((menu, i) => {
      const className = menu === props.activeMenu ? "ui button active" : "ui button";
      return (
        <div onClick={() => onMenuClick(menu)} className={className} key={i}>
          {_.startCase(menu)}
        </div>
      );
    });
  };

  const startCountdown = (duration) => {
    setTimerActive(true);

    const start = Date.now();

    function timer() {
      let diff = duration * 60 - (((Date.now() - start) / 1000) | 0);

      let minutes = (diff / 60) | 0;
      let seconds = diff % 60 | 0;

      // minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      setTime(`${minutes}:${seconds}`);
      if (minutes === "00" && seconds === "00") {
        clearInterval(interval);
      }
    }
    timer();
    const interval = setInterval(timer, 1000);
  };

  return (
    <div className="ui center aligned container" style={{ marginTop: "20px" }}>
      <div className="ui basic buttons">{renderMenuButtons()}</div>
      <div className="ui header" style={{ fontSize: "6rem", margin: "30px" }}>
        {timerActive ? time : `${props.settings[props.activeMenu]}:00`}
      </div>
      <button
        onClick={() => startCountdown(props.settings[props.activeMenu])}
        className="ui huge basic black button"
      >
        {timerActive ? "STOP" : "START"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    activeMenu: state.activeMenu,
  };
};

export default connect(mapStateToProps, { updateActiveMenu })(Timer);
