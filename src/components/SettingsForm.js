import React from "react";
import { Form, Field } from "react-final-form";

import Modal from "./Modal";
import history from "../history";

class Settings extends React.Component {
  onFormSubmit(values) {
    history.push("/");
    console.log(values);
  }

  renderForm() {
    return (
      <div className="ui container">
        <h5 className="ui header">Time (minutes)</h5>

        <Form
          onSubmit={this.onFormSubmit}
          render={({ handleSubmit }) => {
            return (
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="ui field labeled input ">
                  <div className="ui label">Focus</div>
                  <Field name="focus" component="input" type="number" placeholder="10" />
                </div>
                <div className="ui field labeled input ">
                  <div className="ui label">Short Break</div>
                  <Field
                    name="short break"
                    component="input"
                    type="number"
                    placeholder="10"
                  />
                </div>
                <div className="ui field labeled input ">
                  <div className="ui label">Long Break</div>
                  <Field
                    name="long break"
                    component="input"
                    type="number"
                    placeholder="10"
                  />
                </div>
                <div className="buttons ui center aligned container">
                  <button type="submit" className="ui secondary button">
                    Okay
                  </button>
                  <button
                    type="button"
                    onClick={() => history.push("/")}
                    className="ui button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            );
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Timer Settings"
        content={this.renderForm()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default Settings;
