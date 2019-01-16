import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Offer from "./Offer";

import CandidateInfo from "./CandidateInfo";

import { getInfoOffersApplication } from "../actions/accountCandidateActions";

class AccountCandidate extends Component {
  componentDidMount = () => {
    this.props.getInfoOffersApplication()
  }
  render() {
    const id = localStorage.getItem('idUser');
    return (
      <div className="AccountCandidate" aria-hidden="true">
        <CandidateInfo id={id} />
        {this.props.listOfCandidatesApplications.map(e => (
          <Offer origin="candidate" data={e} id={e.id_offers} key={e.id_offers} />
          ))}

      </div>
    );
  }
};


const mapStateToProps = state => ({
  listOfCandidatesApplications: state.accountCandidate.listOfCandidatesApplications
});

export default connect(
  mapStateToProps,
  { getInfoOffersApplication }
)(AccountCandidate);
