import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewQuestion } from "../actions/newOfferActions";

import "./css/NewQuestion.css";
import iconAdd from "../images/icons/iconAdd.png";

class NewQuestion extends Component {
  state = {
    newQuestion: ""
  };

  handleChange = e => {
    this.setState({
      newQuestion: e.target.value
    });
  };

  render() {
    const { newQuestion } = this.state;
    return (
      <div className="NewQuestion">
        <div className="row align-items-center mt-3 mb-4">
          <div className="col-10 col-md-11">
            <textarea value={newQuestion} onChange={this.handleChange} placeholder="Ajouter une question..."/>
            {/* <button onClick={() => this.props.postNewQuestion(newQuestion)}>
          &nbsp;+&nbsp;
        </button> */}
          </div>
          <div className="col-2 col-md-1">
            <img
              src={iconAdd}
              alt=""
              onClick={() => this.props.postNewQuestion(newQuestion)}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  questionsList: state.newOffer.questionsList
});

export default connect(
  mapStateToProps,
  { postNewQuestion }
)(NewQuestion);
