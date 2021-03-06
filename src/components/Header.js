import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <div className="ui big header item">Focus App</div>

      <div className="right menu">
        <Link to="/settings" className="ui item">
          <i className="cog icon"></i>
          Settings
        </Link>

        <button className="ui google plus button">
          <i className="google icon"></i>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Header;
