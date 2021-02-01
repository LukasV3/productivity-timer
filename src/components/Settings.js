import React from "react";
import Modal from "./Modal";
import history from "../history";

class Settings extends React.Component {
  renderActions() {
    return (
      <button onClick={() => history.push("/")} className="ui button black">
        OK
      </button>
    );
  }

  renderContent() {
    return (
      <div className="ui center aligned list">
        <h5 className="ui item">Time (minutes)</h5>

        <div className="ui item labeled input ">
          <div className="ui label">Focus</div>
          <input type="number" />
        </div>

        <div className="ui item labeled input ">
          <div className="ui label">Short Break</div>
          <input type="number" />
        </div>

        <div className="ui item labeled input ">
          <div className="ui label">Long Break</div>
          <input type="number" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Timer Settings"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default Settings;
