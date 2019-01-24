import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { getApplicationDescription } from "../actions/applicationActions";

import OrangeButton from "./OrangeButton";

import iconArrow from "../images/icons/iconArrow.png";

import "./css/ApplicationCandidate.scss";

class ApplicationCandidate extends Component {
  state = {
    applicationQuestions: []
  };

  getApplicationQuestions = ids => {
    const domain = process.env.REACT_APP_DOMAIN_NAME;
    const questions = [];
    const promises = [];
    ids.forEach(id => {
      const url = `${domain}api/questions/${id}`;
      promises.push(
        axios.get(url).then(res => {
          questions.push(res.data);
        })
      );
    });
    Promise.all(promises).then(() => {
      this.setState({
        applicationQuestions: questions
      });
    });
  };

  componentDidMount = () => {
    this.props.getApplicationDescription(this.props.match.params.id);
  };

  handleClick = e => {
    e.preventDefault();
    const arrQ = this.props.applicationDescription.questions;
    if (arrQ.length) {
      this.getApplicationQuestions(arrQ);
      localStorage.setItem("answersRank", 0);
    }
  };

  render() {
    const { idOffer } = this.props;
    const {
      title,
      description,
      contract_type,
      place,
      questions
    } = this.props.applicationDescription;
    const questionList = this.state.applicationQuestions;

    return (
      <div className="ApplicationCandidate container mt-3 mb-5 p-3">
        <div className="row">
          <div className="col-12">
            <h4>{title}</h4>
          </div>
          <div className="col-12">
            <div className="offerDescription ">
              <span className="infoTitle">
                <b>Description de l'offre : </b>
              </span>{" "}
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
          <div className="col-12">
            <p>
              <span className="infoTitle">
                <b>Type de contrat :</b>
              </span>{" "}
              {contract_type}
            </p>
            <p>
              <span className="infoTitle">
                <b>Lieu :</b>
              </span>{" "}
              {place}
            </p>
          </div>

          {questionList.length === 0 && (
            <div className="col-12" onClick={this.handleClick}>
              <a href="#">Voir les questions</a>
            </div>
          )}
          {questionList.length > 0 && (
            <div className="col-12">
              <hr />
            </div>
          )}

          <div className="col-12 pl-5 pr-5">
            {questionList.map((e, id) => (
              <div key={`question-${id}`}>
                <span className="infoTitle">
                  <b>Question {`${id + 1}`}</b>
                </span>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
          <div className="col-12 text-right">
            {questionList.length !== 0 && (
              <Link to={`/answers/offers${idOffer}/question${questions[0]}`}>
                <OrangeButton text="Postuler" />
              </Link>
            )}
            <div />
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
