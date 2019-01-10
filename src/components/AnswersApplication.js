import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { postAnswer } from "../actions/applicationActions";
import OrangeButton from "./OrangeButton";

class AnswersApplication extends Component {
    state = {
        text: '',
        redirection: false
    }

    handleSubmit = async () => {
        const {idOffer, idQuestion } = this.props.match.params
        const {text} = this.state
        await this.props.postAnswer(idOffer,idQuestion,text,'file_link')
        this.setState({redirection: true})
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({text: e.target.value})
    }

  render() {
    console.log('POUETTE ANSWERS RANK',this.props.answersRank);
    const {idOffer, applicationDescription,answersRank} = this.props;
    const {redirection} = this.state
    if(redirection) 
        return <Redirect to={`/answers/offers${idOffer}/question${applicationDescription.questions[answersRank]}`}/>
    return (
      <div className="AnswersApplication">
      <form onSubmit={this.handleSubmit}>
        <input 
        type='text'
        name='answer'
        placeholder='Votre réponse...'
        onChange={this.handleChange}/>
        <OrangeButton text='Suivant'/>
      </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDescription: state.application.applicationDescription,
  idOffer: state.application.idOfferApplication,
  answersRank: state.application.answersRank
});

export default connect(
  mapStateToProps,
  { postAnswer }
)(AnswersApplication);
