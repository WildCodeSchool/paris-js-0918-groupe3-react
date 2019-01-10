import React, { Component } from 'react'
import { connect } from "react-redux";

import { getApplicationsOnOffers } from "../actions/accountCompanyActions";
import sortApplicationsByCandidate from "../helpers/sortApplicationsByCandidate";

class Applications extends Component {
    componentDidMount = () => {
        this.props.getApplicationsOnOffers(this.props.match.params.id)
    }
    render() {
        const applicationById = sortApplicationsByCandidate(this.props.applicationsCompany)
        return (
            <div className='Applications'>
                {applicationById.map((e, i) =>
                    <div>
                        <h3>{`candidature n°${i + 1}`}</h3>
                        {e.QR.map((el, id) =>
                            <div>
                                <p>{`Q°${id+1} : ${el.question}`}</p>
                                <p>{el.reponse}</p>
                            </div>
                        )}
                    </div>
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
