import React, { Component } from "react";
import { getAnswerCandidate } from "../actions/accountCandidateActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./css/AnswersCandidate.scss"

class AnswersCandidate extends Component {
  componentDidMount = () => {
    this.props.getAnswerCandidate(this.props.match.params.idOffer);
  };
  render() {
    const { answersCandidate } = this.props;

    return (
      <div className="AnswersCandidate container p-4 mt-5 mb-5">
        <div className="row">
          <div className="col">
            <Link to="/candidates" className="retourLink">
              <p >Retourner sur mon espace</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {answersCandidate.map((e, i) => (
              <div key={`answers-${i}`}>
                <p className="question">{`${i + 1}. ${e.question}`}</p>
                <p className="answer" dangerouslySetInnerHTML={{ __html: e.answer }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answersCandidate: state.accountCandidate.answersCandidate
});

export default connect(
  mapStateToProps,
  { getAnswerCandidate }
)(AnswersCandidate);
