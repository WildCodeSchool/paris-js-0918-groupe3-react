import React, { Component } from 'react'
import { connect } from "react-redux";

import { getApplicationsOnOffers } from "../actions/accountCompanyActions";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";


import ApplicationCompany from "./ApplicationCompany"



class Applications extends Component {


    componentDidMount = () => {
        this.props.getApplicationsOnOffers(this.props.match.params.id)
    }


    render() {
        const applicationById = sortApplicationsByCandidate(this.props.applicationsCompany)
        
        return (
            <div className='Applications'>


                {applicationById.map((e, i) =>
                    <ApplicationCompany index={i} element={e}/>
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
