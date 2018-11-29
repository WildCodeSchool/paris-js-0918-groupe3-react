import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewQuestion } from "../actions/newOfferActions";

import './NewQuestion.css';

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
        <input value={newQuestion} onChange={this.handleChange} />
        <button onClick={() => this.props.postNewQuestion(newQuestion)}>
          &nbsp;+&nbsp;
        </button>
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