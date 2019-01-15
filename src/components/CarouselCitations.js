import React, { Component } from "react";
import axios from "axios";

import "./css/CarouselCitations.scss";

class CarouselCitations extends Component {
  state = {
    allCitation: [],
    isLoaded: false
  };

  componentDidMount = async () => {
    await axios.get("./citations.json").then(
      response => {
        this.setState({
          allCitation: response.data,
          isLoaded: true
        });
      }
      // error => {
      //   this.setState({
      //   });
      // }
    );
  };

  render() {
    const { allCitation, isLoaded } = this.state;
    return (
      <div className="carouselCitations container p-1">
        <div
          // id="carouselExampleControls"
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <div className="carousel-inner">
            {/* Carousel first slide */}
            <div className="carousel-item active">
              <div className="row" />
              <div className="col-12">
                <h5>
                  <i>
                    <b>{isLoaded && allCitation[0].citation}</b>
                  </i>
                </h5>
              </div>
              <div className="nameAuteur col-12 text-right p-3">
                <h5>
                  <i>{isLoaded && allCitation[0].auteur}</i>
                </h5>
              </div>
            </div>
            {/* Carousel other slides */}
            {isLoaded &&
              allCitation
                .filter((e, i) => i > 0)
                .map((e, i) => {
                  return (
                    <div className="carousel-item" key={`citation${i}`}>
                      <div className="row" />
                      <div className="col-12 p-0">
                        <h5>
                          <i>
                            <b>{e.citation}</b>
                          </i>
                        </h5>
                      </div>
                      <div className="nameAuteur col-12 text-right p-3">
                        <h5>
                          <i>{e.auteur}</i>
                        </h5>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        {/* <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a> */}
      </div>
    );
  }
}

export default CarouselCitations;
