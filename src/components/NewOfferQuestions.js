import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginalQuestions } from "../actions/newOfferActions";

import NewOfferQuestion from "./NewOfferQuestion";

import "./css/NewQuestions.scss"

class NewOfferQuestions extends Component {
  componentDidMount() {
    this.props.getOriginalQuestions();
  }

  render() {
    const { questionsList, handleBoxChange } = this.props;
    return (
      <div className="NewOfferQuestions">
        <h5>Questions diponibles</h5>
        <div name="questionsList" className="questionsList">
          {questionsList.map(q => (
            <NewOfferQuestion
              key={q.id}
              id={q.id}
              text={q.text}
              handleBoxChange={handleBoxChange}
            />
          ))}
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
  { getOriginalQuestions }
)(NewOfferQuestions);
