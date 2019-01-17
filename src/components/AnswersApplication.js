import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  postAnswer,
  getQuestion,
  getApplicationDescription,
  postApplication
} from "../actions/applicationActions";
import OrangeButton from "./OrangeButton";

import "./css/AnswersApplication.scss";

class AnswersApplication extends Component {
  state = {
    text: "",
    redirection: false,
    redirectionCandidateAccount: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { idOffer, idQuestion } = this.props.match.params;
    const { text } = this.state;
    const answersRank = localStorage.getItem("answersRank");
    const arrQ = this.props.applicationDescription.questions;
    await this.props.postAnswer(idOffer, idQuestion, text, "file_link");
    if (arrQ && arrQ.length - 1 !== parseInt(answersRank)) {
      await localStorage.setItem(
        "answersRank",
        parseInt(localStorage.getItem("answersRank")) + 1
      );
      await this.setState({ redirection: true });
      setTimeout(() => window.location.reload(), 100);
    } else {
      await this.props.postApplication(idOffer, 1);
      this.setState({ redirectionCandidateAccount: true });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  componentDidMount = () => {
    this.props.getApplicationDescription(this.props.match.params.idOffer);
    this.props.getQuestion(this.props.match.params.idQuestion);
  };

  render() {
    const { idOffer, applicationDescription, questionText } = this.props;
    const { redirection, redirectionCandidateAccount } = this.state;
    const answersRank = localStorage.getItem("answersRank");
    const arrQ = applicationDescription.questions;
    console.log(arrQ);

    if (redirection)
      return (
        <Redirect
          to={`/answers/offers${idOffer}/question${arrQ[answersRank]}`}
        />
      );
    if (redirectionCandidateAccount) return <Redirect to={`/candidates`} />;
    return (
      <div className="AnswersApplication container mt-3 p-3">
        <div className="row">
          <div className="col-12 p-3">
            {arrQ && (
              <span className="infoTitle">
                <b>Question {parseInt(answersRank)+1}</b>
              </span>
            )}
            <p>{questionText}</p>
          </div>
          <div className="col-12">
            <form onSubmit={this.handleSubmit} method="POST">
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1 text-center mt-3">
                  <textarea
                    type="text"
                    name="answer"
                    placeholder="Votre réponse..."
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-12 col-md-10 offset-md-1 text-right">
                  {arrQ && arrQ.length - 1 !== parseInt(answersRank) ? (
                    <OrangeButton text="Suivant" />
                  ) : (
                    <OrangeButton text="Envoyer ma candidature" />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDescription: state.application.applicationDescription,
  idOffer: state.application.idOfferApplication,
  questionText: state.application.questionText
});

export default connect(
  mapStateToProps,
  { postAnswer, getQuestion, getApplicationDescription, postApplication }
)(AnswersApplication);
