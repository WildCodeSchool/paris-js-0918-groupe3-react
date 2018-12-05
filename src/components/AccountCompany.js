import React, { Component } from 'react';
import { getOffersCompany } from "../actions/accountCompanyActions";
import { connect } from 'react-redux';
import './AccountCompany.css';

class AccountCompany extends Component {
    componentDidMount = () => {
        this.props.getOffersCompany(this.props.match.params.id, 1)
    }

    render() {
        return (
            <div className='AccountCompany'>
                <p>compte compagnie {this.props.match.params.id}</p>
                {this.props.offersList.map((e, i) =>
                    <p>{e.title}</p>
                )}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    offersList: state.offersCompanyList.offersList
});

export default connect(mapStateToProps, { getOffersCompany })(AccountCompany);