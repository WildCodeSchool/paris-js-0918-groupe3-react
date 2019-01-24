import React, { Component } from "react";

import "./css/CarouselCompaniesHome.scss";

import picCompany1 from "../images/companies/WCS.png";
import picCompany2 from "../images/companies/Alten.png";
import picCompany3 from "../images/companies/CGI.png";
import picCompany4 from "../images/companies/MaisonsPierre.png";
import picCompany5 from "../images/companies/Apave.png";
import picCompany6 from "../images/companies/Dyalog.png";
import picCompany7 from "../images/companies/Alstom.png";
import picCompany8 from "../images/companies/Absd.png";
import picCompany9 from "../images/companies/Imaginup.png";
import picCompany10 from "../images/companies/Alphalives.png";
import picCompany11 from "../images/companies/Creatic.png";
import picCompany12 from "../images/companies/Airfrance.png";
import picCompany13 from "../images/companies/Agence404.png";
import picCompany14 from "../images/companies/Bouygues.png";
import picCompany15 from "../images/companies/Airbnb.png";

const srcImg = "https://via.placeholder.com/100";



class CarouselCompaniesHome extends Component {
  render() {
    return (
      <div className="carouselCompaniesHome container-fluid p-2 m-2">
        <div
          // id="carouselExampleControls"
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
          data-interval="6500"
        >
          <div className="carousel-inner">
            {/* Carousel Slide 1 */}
            <div className="carousel-item active">
              <div className="row justify-content-around align-items-center p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany1} alt="" />
                  <br />
                  <br />
                  <p>Wild Code School</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany2} alt="" />
                  <br />
                  <br />
                  <p>Alten</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75" src={picCompany3} alt="" />
                  <br />
                  <br />
                  <p>CGI</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany4} alt="" />
                  <br />
                  <br />
                  <p>Maisons Pierre</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany5} alt="" />
                  <br />
                  <br />
                  <p>Apave</p>
                </div>
              </div>
            </div>
            {/* Carousel Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-around align-items-center p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany6} alt="" />
                  <br />
                  <br />
                  <p>Dyalog</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany7} alt="" />
                  <br />
                  <br />
                  <p>Alstom</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75" src={picCompany8} alt="" />
                  <br />
                  <br />
                  <p>Absd</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany9} alt="" />
                  <br />
                  <br />
                  <p>Imagin'up</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany10} alt="" />
                  <br />
                  <br />
                  <p>Alphalives</p>
                </div>
              </div>
            </div>
            {/* Carousel Slide 3 */}
            <div className="carousel-item">
              <div className="row justify-content-around p-2">
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany11} alt="" />
                  <br />
                  <br />
                  <p>Creatic Agency</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 text-center">
                  <img className=" w-75" src={picCompany12} alt="" />
                  <br />
                  <br/>
                  <p>Air France</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-md-block text-center">
                  <img className=" w-75" src={picCompany13} alt="" />
                  <br />
                  <br />
                  <p>Agence 404</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany14} alt="" />
                  <br />
                  <br />
                  <p>Bouygues Telecom</p>
                </div>
                <div className="col-6 col-md-4 col-lg-2 d-none d-lg-block text-center">
                  <img className=" w-75" src={picCompany15} alt="" />
                  <br />
                  <br />
                  <p>Airbnb</p>
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
