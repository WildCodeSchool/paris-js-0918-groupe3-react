import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginalQuestions } from "../actions/newOfferQuestions";

class NewOfferQuestions extends Component {
  componentDidMount() {
    console.log("va dans didmount");

    this.props.getOriginalQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questionsList.map(e => (
          <p key = {e.id}>{e.text}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionsList: state.getQuestions.questionsList
  //add here the props you need from the store state
});

export default connect(
  mapStateToProps,
  { getOriginalQuestions }
)(NewOfferQuestions);
