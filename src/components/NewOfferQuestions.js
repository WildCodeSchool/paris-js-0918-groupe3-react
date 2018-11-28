import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getOriginalQuestions,
  postNewQuestion
} from "../actions/newOfferActions";

class NewOfferQuestions extends Component {
  componentDidMount() {
    console.log("va dans didmount");

    this.props.getOriginalQuestions();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.questionsList.map(e => (
          <p key={e.id}>{e.text}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionsList: state.newOffer.questionsList
});

export default connect(
  mapStateToProps,
  { getOriginalQuestions, postNewQuestion }
)(NewOfferQuestions);
