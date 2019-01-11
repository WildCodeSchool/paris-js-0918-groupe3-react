import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import CandidateInfo from "./CandidateInfo";

class AccountCandidate extends Component {
  render() {
    const id = localStorage.getItem('idUser');
    return (
      <div className="AccountCandidate" aria-hidden="true">
        <NavLink to="/">Acceuil</NavLink>
        <CandidateInfo id={id} />
      </div>
    );
  }
};

export default AccountCandidate;
