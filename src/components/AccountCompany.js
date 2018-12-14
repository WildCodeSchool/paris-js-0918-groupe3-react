import React, { Component } from 'react';
import { getOffersCompany } from "../actions/accountCompanyActions";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import './AccountCompany.css';
import Offer from './Offer';
import CompanyInfo from './CompanyInfo';

class AccountCompany extends Component {
    componentDidMount = () => {
        this.props.getOffersCompany(this.props.match.params.id, 1)
    }

    render() {
        const {offersList} = this.props;
        const {id} = this.props.match.params;
        return (
            <div className='AccountCompany' aria-hidden="true">
            <NavLink to='/'>Acceuil</NavLink>
            <NavLink to="/newOffer">Poster une offre</NavLink>
                <CompanyInfo id={id} />
                {offersList.map((e, i) =>
                    <Offer data = {e} key={e.id}/>
                )}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    offersList: state.accountCompany.offersList
});

export default connect(mapStateToProps, { getOffersCompany })(AccountCompany);