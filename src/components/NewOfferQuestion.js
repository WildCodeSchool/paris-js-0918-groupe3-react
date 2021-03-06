import React, { Component } from "react";
import Toggle from "react-toggle";

import "react-toggle/style.css";
import "./css/Toggle.scss";
import "./css/NewOfferQuestion.scss"

class NewOfferQuestion extends Component {


  render() {
    const { id, text, handleBoxChange } = this.props;
    return (
      <div className="NewOfferQuestion">
        <div className="row align-items-center m-3">
          <div className="col-4 col-md-2">
            <Toggle
              className="customToggleBlue"
              name={`question${id}`}
              defaultChecked={false}
              icons={false}
              onChange={handleBoxChange}
            />
          </div>
          <div className="col-8 col-md-10">
            <span className="textQuestion">{text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewOfferQuestion;
