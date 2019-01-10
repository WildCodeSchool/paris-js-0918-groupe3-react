import React, { Component } from 'react'
import iconArrow from "../images/icons/iconArrow.png";

import "./css/ApplicationCompany.scss";
import OrangeButton from "./OrangeButton";

class ApplicationCompany extends Component {
    state = {
        showElement: true
    };

    handleShowElement = () => {
        const { showElement } = this.state;
        this.setState({ showElement: !showElement });
    };

    render() {
        const { showElement } = this.state;
        const { index, element } = this.props;
        return (
            <div className='ApplicationCompany container'>
                <div className="row align-items-start p-2 m-2">
                    <div className="col-11">
                        <div className={showElement ? "row text-left" : "row text-left mt-3 mt-md-4"}>
                            <div className="col-auto">
                                <h6>{`candidature n°${index + 1}`}</h6>
                            </div>

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
                            <div className="col m-2">
                                <h6>{`${id + 1}. ${el.question}`}</h6>
                                <div className="answers">

                                    <p>{el.reponse}</p>
                                </div>
                            </div>
                        )}
                        <div className="col-12 text-right">
                            <OrangeButton text="Valider" />
                            <OrangeButton text="Refuser" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplicationCompany