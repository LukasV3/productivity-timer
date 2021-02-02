import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { updateActiveMenu } from "../actions";

const Timer = (props) => {
  const renderMenuButtons = () => {
    return ["focus", "shortBreak", "longBreak"].map((menu, i) => {
      const className = menu === props.activeMenu ? "ui button active" : "ui button";
      return (
        <div onClick={() => props.updateActiveMenu(menu)} className={className} key={i}>
          {_.startCase(menu)}
        </div>
      );
    });
  };

  return (
    <div className="ui center aligned container" style={{ marginTop: "20px" }}>
      <div className="ui basic buttons">{renderMenuButtons()}</div>
      <div className="ui header" style={{ fontSize: "6rem", margin: "30px" }}>
        {props.settings[props.activeMenu]}:00
      </div>
      <button className="ui huge basic black button">START</button>
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
