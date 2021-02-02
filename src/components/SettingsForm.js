import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import Modal from "./Modal";
import history from "../history";
import { updateSettings } from "../actions";

class SettingsForm extends React.Component {
  onFormSubmit = (values) => {
    // mutating values obj so all values are numbers rather than strings
    for (let [key, value] of Object.entries(values)) {
      values[key] = +value;
    }
    this.props.updateSettings(values);
    history.push("/");
  };

  renderForm() {
    return (
      <div className="ui container">
        <h5 className="ui header">Time (minutes)</h5>

        <Form
          initialValues={this.props.settings}
          onSubmit={this.onFormSubmit}
          validate={this.validate}
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
                    name="shortBreak"
                    component="input"
                    type="number"
                    placeholder="10"
                  />
                </div>
                <div className="ui field labeled input ">
                  <div className="ui label">Long Break</div>
                  <Field
                    name="longBreak"
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

  validate(values) {
    const errors = {};
    if (Object.values(values).join("").includes(".")) {
      errors.decimal = "No decimals";
    }
    if (Object.values(values).find((val) => val < 0)) {
      errors.negative = "No negatives";
    }
    return errors;
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { updateSettings })(SettingsForm);
