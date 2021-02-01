import React from "react";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <div className="ui big header item">Focus App</div>

      <div className="right menu">
        <button className=" ui button">
          <i className="cog icon"></i>
          Settings
        </button>
        <button className="ui google plus button">
          <i className="google icon"></i>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Header;
