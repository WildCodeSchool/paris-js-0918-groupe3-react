import React, { Component } from 'react'
import { connect } from "react-redux";
import iconArrow from "../images/icons/iconArrow.png";

import "./css/ApplicationCompany.scss";
import OrangeButton from "./OrangeButton";

import { putStatusApplication } from "../actions/accountCompanyActions"

class ApplicationCompany extends Component {
    state = {
        showElement: true
    };

    handleShowElement = () => {
        const { showElement } = this.state;
        this.setState({ showElement: !showElement });
    };

    changeStatus = async (status) => {
        const { idCandidate, idOffer } = this.props
        await this.props.putStatusApplication(idOffer, idCandidate, status)
        alert(`Application ${status}`)
        setTimeout(window.location.reload(),100)
    }

    render() {
        const { showElement } = this.state;
        const { index, element, status } = this.props;
        return (
            <div className='ApplicationCompany container' >
                <div className="row align-items-start p-2 m-2">
                    <div className="col-11">
                        <div className={showElement ? "row text-left" : "row text-left mt-3 mt-md-4"}>
                            <div className="col-auto">
                                <h6>{`candidature n°${index + 1}`}</h6>
                            </div>
                            {status}
                        </div>
                    </div>

                    {/* Button open collapse */}
                    <div className="col-1 mb-3">
                        <a
                            href={"#A" + index}
                            data-toggle="collapse"
                            onClick={this.handleShowElement}
                        >
                            <img src={iconArrow} alt="icon arrow" className="iconArrow" />
                        </a>
                    </div>

                    {/* Collapse Open */}
                    <div className="collapse" id={"A" + index}>
                        {element.QR.map((el, id) =>
                            <div className="col m-2" key={`QR-${id}`}>
                                <h6>{`${id + 1}. ${el.question}`}</h6>
                                <div className="answers">

                                    <p>{el.reponse}</p>
                                </div>
                            </div>
                        )}
                        <div className="col-12 text-right">
                            <div onClick={() => this.changeStatus('validated')}><OrangeButton text="Valider" /></div>
                            <div onClick={() => this.changeStatus('rejected')}><OrangeButton text="Refuser" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { putStatusApplication }
)(ApplicationCompany);