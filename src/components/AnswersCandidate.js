import React, { Component } from "react";
import { getAnswerCandidate } from "../actions/accountCandidateActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrangeButton from "./OrangeButton";

class AnswersCandidate extends Component {
    componentDidMount = () => {
            this.props.getAnswerCandidate(this.props.match.params.idOffer)
        }
    render () {
        const { answersCandidate } = this.props
        console.log("reponse candidat", answersCandidate)
        return(
            <div className="AnswersCandidate">
                {answersCandidate.map((e, i) => (
                    <div key={`answers-${i}`}>
                        <p>{`${i+1}. ${e.question}`}</p>
                        <p>{e.answer}</p>
                    </div>

                ))}
                <Link to='/candidates'><OrangeButton text='Retour à mon espace'/></Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    answersCandidate: state.accountCandidate.answersCandidate
  });

  export default connect(
    mapStateToProps,
    { getAnswerCandidate }
  )(AnswersCandidate);