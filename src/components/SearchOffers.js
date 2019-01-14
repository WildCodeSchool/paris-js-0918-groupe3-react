import React, { Component } from "react";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

import { searchOffers, fetchCities } from "../actions/searchOffersActions";
import OrangeButton from "./OrangeButton";
import CarouselCitations from "./CarouselCitations";

import "./css/SearchOffer.scss";

class SearchOffers extends Component {
  state = {
    title: "",
    place: "",
    contract_type: "CDI"
  };

  handleChange = async e => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value
    });
    const { place } = this.state;
    if (name === "place") {
      this.props.fetchCities(place);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchOffers(this.state);
  };
  render() {
    const { citiesList } = this.props;

    return (
      <div className="SearchOffer container-fluid">
        <form className="container p-3 p-md-4">
          <div className="row text-center justify-content-center">
            {<CarouselCitations />}
          </div>
          <div className="row text-center align-items-center">
            <div className="col-12 col-lg-6">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Poste (Ex: Développeur Web)"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-lg-4">
              <input
                type="text"
                name="place"
                id="place"
                list="cities"
                placeholder="Lieu (Ex: Paris)"
                onChange={this.handleChange}
              />
              <datalist id="cities">
                {citiesList.length &&
                  citiesList.map(c => (
                    <option key={c.code}>
                      {c.nom} ({c.codesPostaux[0].substr(0, 2)})
                    </option>
                  ))}
              </datalist>
            </div>
            <div className="col-12 col-lg-2">
              <select
                name="contract_type"
                id="contract_type"
                onChange={this.handleChange}
                defaultValue="type"
              >
                <option value="type" disabled>
                  Type de contrat&nbsp;
                </option>
                <optgroup>
                  <option>Tous</option>
                  <option>CDI</option>
                  <option>CDD</option>
                  <option>Stage</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-12">
              <Link to="/#anchorOffer" smooth onClick={this.handleSubmit}>
                <OrangeButton text="Rechercher"  />
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  citiesList: state.searchOffers.citiesList
});

export default connect(
  mapStateToProps,
  { searchOffers, fetchCities }
)(SearchOffers);
