import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from 'react-router-dom';

import { getApplicationDescription } from "../actions/applicationActions";
import OrangeButton from "./OrangeButton";

class ApplicationCandidate extends Component {
  state = {
    applicationQuestions: []
  }

  getApplicationQuestions = ids => {
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const questions = [];
    const promises = [];
    ids.forEach(id => {
      const url = `${domain}api/questions/${id}`;
      promises.push(axios.get(url).then(res => {
        questions.push(res.data)
      }))
    });
    Promise.all(promises).then(() => {
      this.setState({
        applicationQuestions: questions,
      });
    })
  };


  componentDidMount = () => {
    this.props.getApplicationDescription(this.props.match.params.id);
  }

  handleClick = (e) => {
    e.preventDefault()
    const arrQ = this.props.applicationDescription.questions;
    if (arrQ.length) { 
      this.getApplicationQuestions(arrQ)
      localStorage.setItem("answersRank", 0)
     }
  }

  render() {
    const { idOffer } = this.props
    const { title, description, contract_type, place, questions } = this.props.applicationDescription;
    const questionList = this.state.applicationQuestions

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
            {questionList.map((e, id) => <p key={`question-${id}`}>{e.text}</p> )}
            {questionList.length === 0 &&
              <div onClick={this.handleClick} >
                <OrangeButton text='VOIR LES QUESTIONS' />
              </div>}
            {questionList.length !== 0 &&
              <Link to={`/answers/offers${idOffer}/question${questions[0]}`}>
                <OrangeButton text="Postuler" />
              </Link>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationDescription: state.application.applicationDescription,
  idOffer: state.application.idOfferApplication
});

export default connect(
  mapStateToProps,
  { getApplicationDescription }
)(ApplicationCandidate);
