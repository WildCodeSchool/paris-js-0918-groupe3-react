import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { postAnswer, getQuestion, getApplicationDescription } from "../actions/applicationActions";
import OrangeButton from "./OrangeButton";

class AnswersApplication extends Component {
  state = {
    text: '',
    redirection: false,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { idOffer, idQuestion } = this.props.match.params
    const { text } = this.state
    await this.props.postAnswer(idOffer, idQuestion, text, 'file_link')
    await localStorage.setItem("answersRank", parseInt(localStorage.getItem("answersRank")) + 1)
    await this.setState({ redirection: true })
    setTimeout(() => window.location.reload(), 100)
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ text: e.target.value })
  }

  componentDidMount = () => {
    this.props.getApplicationDescription(this.props.match.params.idOffer)
    this.props.getQuestion(this.props.match.params.idQuestion)
  }

  render() {
    const answersRank = localStorage.getItem("answersRank")
    const { idOffer, applicationDescription, questionText } = this.props;
    const arrQ = applicationDescription.questions
    const { redirection } = this.state
    if (redirection)
      return <Redirect to={`/answers/offers${idOffer}/question${arrQ[answersRank]}`} />
    return (
      <div className="AnswersApplication">
        {questionText}
        <form onSubmit={this.handleSubmit} method='POST'>
          <input
            type='text'
            name='answer'
            placeholder='Votre réponse...'
            onChange={this.handleChange} />
          {arrQ && arrQ.length - 1 !== parseInt(answersRank) ?
            <OrangeButton text='Suivant' />
            :
            <OrangeButton text='Terminer POSTULAGE' />}
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDescription: state.application.applicationDescription,
  idOffer: state.application.idOfferApplication,
  questionText: state.application.questionText,
});

export default connect(
  mapStateToProps,
  { postAnswer, getQuestion, getApplicationDescription }
)(AnswersApplication);
