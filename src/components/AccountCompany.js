import React, { Component } from 'react';
import { getOffersCompany } from "../actions/accountCompanyActions";
import { connect } from 'react-redux';
import './AccountCompany.css';
import Offer from './Offer';
import { NavLink } from 'react-router-dom';

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
                <p>compte compagnie {id}</p>
                {offersList.map((e, i) =>
                    <Offer data = {e} key={e.id}/>
                )}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    offersList: state.offersCompanyList.offersList
});

export default connect(mapStateToProps, { getOffersCompany })(AccountCompany);