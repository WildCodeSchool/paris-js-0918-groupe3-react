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
        console.log('OK',ids);
        
        const domain = process.env.REACT_APP_DOMAIN_NAME;
        const questions = [];
        const promises = [];
        ids.forEach(id => {
            const url = `${domain}api/questions/${id}`;
            promises.push(axios.get(url).then(res => {
                questions.push(res.data)
            }))
        }); 
        Promise.all(promises).then( () => { 
        this.setState ({
            applicationQuestions: questions,
        });
    })
    };
            
    
  componentDidMount = async () => {
    await this.props.getApplicationDescription(this.props.match.params.id);
    console.log('componentDidMount', this.state.applicationQuestions);
    
  }

  handleClick = (e) => {
    e.preventDefault()
    const arrQ = this.props.applicationDescription.questions;
    console.log('TEST', arrQ);
    if(arrQ.length){this.getApplicationQuestions(arrQ)}
  }

  render() {
    const { title, description, contract_type, place, questions } = this.props.applicationDescription;
    const question = this.state.applicationQuestions
    console.log("HELLOOOOOOO", question)
    console.log(this.props.answersRank);
    
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
            {question.map((e,id) => {return <p>{e.text}</p>})}
            {this.state.applicationQuestions.length === 0 && 
            <div onClick={this.handleClick} >
                <OrangeButton text='VOIR LES QUESTIONS'/>
            </div>}
            {this.state.applicationQuestions.length != 0 && 
            <Link to={`/answers/offers${this.props.idOffer}/question${questions[this.props.answersRank]}`}>
                <OrangeButton text="Postuler"/>
            </Link> } 
          </div>
        </div>
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
  { getApplicationDescription }
)(ApplicationCandidate);
