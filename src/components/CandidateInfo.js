import React, { Component } from "react";
import { connect } from "react-redux";

import { getCandidateInfo } from "../actions/accountCandidateActions";

class CandidateInfo extends Component {
  componentDidMount() {
    this.props.getCandidateInfo(this.props.id);
  }

  render() {
    const { email, phone} = this.props.candidateInfo;
    return (
      <div className="CandidateInfo">
        <div className="head">
          <h3>Vos informations personnelles</h3>
          <a href="/candidates">Editer</a>
        </div>
        <div className="content">
          <div>
            <p>E-mail : {email}</p>
          </div>
          <div>
            <p>Téléphone : {phone}</p>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candidateInfo: state.accountCandidate.candidateInfo
});

export default connect(
  mapStateToProps,
  { getCandidateInfo }
)(CandidateInfo);
