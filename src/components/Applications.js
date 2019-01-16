import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getApplicationsOnOffers } from "../actions/accountCompanyActions";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";


import ApplicationCompany from "./ApplicationCompany"
import OrangeButton from './OrangeButton';


class Applications extends Component {

    componentDidMount = () => {
        this.props.getApplicationsOnOffers(this.props.match.params.idOffer)
    }

    render() {
        const { idOffer } = this.props.match.params
        const applicationById = sortApplicationsByCandidate(this.props.applicationsCompany)
        return (
            <div className='Applications'>
                <Link to='/companies'><OrangeButton text="Retour" /></Link>
                {this.props.applicationsCompany[0] && applicationById.map((e, i) =>
                    <ApplicationCompany
                        index={i}
                        element={e}
                        idCandidate={this.props.applicationsCompany[0].id_candidates}
                        status={this.props.applicationsCompany[0].status_application}
                        idOffer={parseInt(idOffer)}
                        key={`ApplicationCompany${i}`}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    applicationsCompany: state.accountCompany.applicationsCompany,
});

export default connect(
    mapStateToProps,
    { getApplicationsOnOffers }
)(Applications);
