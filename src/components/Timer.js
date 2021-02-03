import React, { useState } from "react";
import { connect } from "react-redux";
import _, { startCase } from "lodash";
import Countdown, { zeroPad } from "react-countdown";

import { updateActiveMenu } from "../actions";

const Timer = (props) => {
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = React.createRef();

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

  const onCountdownClick = () => {
    const api = timerRef.current.getApi();

    if (!timerActive) {
      api.start();
      setTimerActive(!timerActive);
    } else {
      api.stop();
      setTimerActive(!timerActive);
    }
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return "00.00";
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="ui center aligned container" style={{ marginTop: "20px" }}>
      <div className="ui basic buttons">{renderMenuButtons()}</div>
      <div className="ui header" style={{ fontSize: "6rem", margin: "30px" }}>
        <Countdown
          date={Date.now() + props.settings[props.activeMenu] * 60 * 1000}
          renderer={renderer}
          autoStart={false}
          ref={timerRef}
          controlled={false}
        />
      </div>
      <button onClick={() => onCountdownClick()} className="ui huge basic black button">
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
