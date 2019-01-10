import React, { Component } from "react";
import { getOffersCompany } from "../actions/accountCompanyActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import OrangeButton from "./OrangeButton";


// import './AccountCompany.css';
import Offer from "./Offer";
import CompanyInfo from "./CompanyInfo";

class AccountCompany extends Component {
  componentDidMount = () => {
    this.props.getOffersCompany(1);      
  };

  render() {
    const { offersList } = this.props;
    const { id } = this.props.match.params
    return (
      <div className="AccountCompany" aria-hidden="true">

        <CompanyInfo id={id} />
        <NavLink to="/newOffer">
          <OrangeButton text="Poster une offre" />
        </NavLink>
        {offersList.map((e, i) => (
          <Offer origin='company' data={e} id={e.id} key={e.id} />

        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offersList: state.accountCompany.offersList,
});

export default connect(
  mapStateToProps,
  { getOffersCompany }
)(AccountCompany);
