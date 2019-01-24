import React, { Component } from "react";
import Toggle from "react-toggle";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import NewOfferQuestions from "./NewOfferQuestions";
import NewQuestion from "./NewQuestion";
import OrangeButton from "./OrangeButton";
import DraftDescriptionOffer from "./DraftDescriptionOffer";
import { connect } from "react-redux";
import { postNewOffer } from "../actions/newOfferActions";
import { fetchCities } from "../actions/searchOffersActions";

import "./css/NewOfferForm.scss";
import "./css/Toggle.scss";

class NewOfferForm extends Component {
  state = {
    title: "",
    place: "",
    contract_type: "CDI",
    description: "",
    is_published: false,
    redirection: false
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

  handleBoxChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.checked
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await this.props.postNewOffer(this.state);
      localStorage.setItem("messageToast", "offrePostee");
      window.location.reload();
      this.setState({
        redirection: true
      });
    } catch {
      localStorage.setItem("messageToast", "erreurOffrePostee");
    }
  };

  handleLegacyHtml = description => {
    this.setState({ description });
  };

  render() {
    const { citiesList } = this.props;
    if (this.state.redirection) return <Redirect to="/companies" />;
    return (
      <div className="NewOfferForm container mb-5">
        <h2>Poster une offre</h2>
        <form className="postNewOfferForm" onSubmit={this.handleSubmit}>
          <div className="col">
            <Link to="/companies">
              <p className="linkBack">Retourner sur mon espace</p>
            </Link>
          </div>
          <div className="row align-items-center mt-4 mb-4">
            <div className="col">
              <div className="row mb-3">
                <div className="col-12 col-md-4 pr-1">
                  <label htmlFor="title">Titre de votre offre</label>
                </div>
                <div className="col-12 col-md-8">
                  <input
                    className="NewOfferForm_field_title"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Ex: Développeur Web"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-2">
                  <label htmlFor="place">Lieu</label>
                </div>
                <div className="col-12 col-md-auto">
                  <input
                    className="NewOfferForm_field_place"
                    type="text"
                    name="place"
                    id="place"
                    list="cities"
                    placeholder="Ex: Paris"
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
              </div>
              <div className="row align-items-center mb-2">
                <div className="col-12 col-md-auto">
                  <label htmlFor="contract_type">Type de contrat</label>
                </div>
                <div className="col-12 col-md-6 NewOfferForm_field_contactType">
                  <select
                    name="contract_type"
                    id="contract_type"
                    onChange={this.handleChange}
                  >
                    <option>CDI</option>
                    <option>CDD</option>
                    <option>Stage</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <DraftDescriptionOffer
                    handleLegacyHtml={this.handleLegacyHtml}
                  />
                </div>
              </div>
            </div>
          </div>
          <NewOfferQuestions handleBoxChange={this.handleBoxChange} />
          <NewQuestion />
          <div className="row justify-content-center">
            <div className="col-auto offset-4 offset-md-8">
              <div className="row">
                <div className="col-3">
                  <Toggle
                    className="customToggleOrange"
                    name="is_published"
                    defaultChecked={false}
                    icons={false}
                    onChange={this.handleBoxChange}
                  />
                </div>
                <div className="col-9 text-center">
                  <span>Mettre en ligne</span>
                </div>
              </div>
            </div>
            <div className="col-auto offset-4 offset-md-8">
              <OrangeButton text="Valider mon offre" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionsList: state.newOffer.questionsList,
  citiesList: state.searchOffers.citiesList
});

export default connect(
  mapStateToProps,
  { postNewOffer, fetchCities }
)(NewOfferForm);
