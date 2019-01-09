import React, { Component } from "react";
import { connect } from "react-redux";

import { getApplicationQuestions } from "../actions/applicationActions";

class Application extends Component {
  componentDidMount() {
    this.props.getApplicationQuestions
(this.props.match.params.id);
  }

  render() {
    const { title, description, contract_type, place } = this.props.applicationQuestions;
    console.log(this.props.id)
    return (
      <div className="Application">
        <div className="head">
          <h3>{title}</h3>
        </div>
        <div className="content">
          <div>
          </div>
          <div>
            <p>Descri : {description}</p>
            <p>Contract type : {contract_type}</p>
          </div>
          <div>
            <p>Place : {place}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationQuestions: state.application.applicationQuestions
});

export default connect(
  mapStateToProps,
  { getApplicationQuestions }
)(Application);
