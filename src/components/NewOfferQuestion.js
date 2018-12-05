import React, { Component } from "react";
import Toggle from "react-toggle";

import "react-toggle/style.css";
import "./css/toggle.css";

class NewOfferQUestion extends Component {
  render() {
    const { id, text, handleBoxChange } = this.props;
    return (
      <div className="NewOfferQuestion">
        <div className="row align-items-center m-3">
          <div className="col-3 col-md-2">
            <input
              type="checkbox"
              name={`question${id}`}
              value={id}
              onChange={handleBoxChange}
            />
            {/* <Toggle
              className="customToggle"
              name={`question${id}`}
              value={id}
              defaultChecked={true}
              //checked={field.input.value}
              icons={true}
              onChange={handleBoxChange}
            /> */}
          </div>
          <div className="col-9 col-md-10">
            <span>{text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewOfferQUestion;
