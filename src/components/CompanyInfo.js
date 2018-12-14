import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCompanyInfo } from '../actions/accountCompanyActions';


class CompanyInfo extends Component {

  componentDidMount() {
    this.props.getCompanyInfo(this.props.id)
  }

  render() {

    const {name, description, email, siret, link} = this.props.companyInfo;
    return (
      <div className='CompanyInfo'>
        <div className='head'>
          <h3>Vos informations personnelles : {name}</h3>
          <a href=''>Editer</a>
        </div>
        <div className='content'>
          <div>
            <img src='' alt='comany logo' />
          </div>
          <div>
            <p>E-mail : {email}</p>
            <p>Site Web : {link}</p>
          </div>
          <div>
            <p>Description : {description}</p>
            <p>Siret : {siret}</p>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  companyInfo : state.accountCompany.companyInfo,
})

export default connect(mapStateToProps, { getCompanyInfo })(CompanyInfo);
