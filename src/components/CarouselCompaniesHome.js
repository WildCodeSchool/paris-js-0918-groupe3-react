import React, { Component } from "react";

import "./css/CarouselCompaniesHome.scss";

const srcImg = "https://via.placeholder.com/100";

class CarouselCompaniesHome extends Component {
  render() {
    return (
      <div className="carouselCompaniesHome container-fluid p-5">
        <div
          // id="carouselExampleControls"
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <div className="carousel-inner">
            {/* Carousel Slide 1 */}
            <div className="carousel-item active">
              <div className="row justify-content-around p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center ">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
              </div>
            </div>
            {/* Carousel Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-around p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
              </div>
            </div>
            {/* Carousel Slide 3 */}
            <div className="carousel-item">
              <div className="row justify-content-around p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75 h-75" src={srcImg} alt="" />
                  <br />
                  <br />
                  <p>Name</p>
                </div>
              </div>
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
      </div>
    );
  }
}

export default CarouselCompaniesHome;
