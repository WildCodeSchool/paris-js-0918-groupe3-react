import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NewOfferContainer from "./components/NewOfferContainer";
import Home from "./components/Home";
import AccountCompany from "./components/AccountCompany";
import AccountCandidate from "./components/AccountCandidate";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AnswersCandidate from "../src/components/AnswersCandidate";

import Applications from "../src/components/Applications";

import ApplicationCandidate from "./components/ApplicationCandidate";
import AnswersApplication from "./components/AnswersApplication";

import WhyPage from "./components/WhyPage";
import HowPage from "./components/HowPage";
import NewPassword from "./components/NewPassword";
import Toast from "./components/Toast";

class App extends Component {
  componentDidMount = () => {
    localStorage.setItem("messageToast", "");
  };

  render() {
    const messageToast = localStorage.getItem("messageToast");
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newOffer" component={NewOfferContainer} />

          <Route
            path="/company:idCompany(\d+)/offers:idOffer(\d+)"
            component={Applications}
          />
          <Route path="/apply:id(\d+)" component={ApplicationCandidate} />
          <Route
            path="/answers/offers:idOffer(\d+)/question:idQuestion(\d+)"
            component={AnswersApplication}
          />

          <Route path="/companies" component={AccountCompany} />
          <Route exact path="/candidates" component={AccountCandidate} />
          <Route
            path="/candidates/answers/offer:idOffer"
            component={AnswersCandidate}
          />
          <Route path="/newpassword/:token" component={NewPassword} />

          <Route path="/why" component={WhyPage} />
          <Route path="/how" component={HowPage} />
        </Switch>
        <Footer />
        {/* Toast */}
        {messageToast === "connexionReussi" && (
          <div>
            <Toast messageToast={"Connexion réussie"} />
          </div>
        )}
        {messageToast === "resetPassword" && (
          <div>
            <Toast messageToast={"Un email vient de vous être envoyé"} />
          </div>
        )}
        {messageToast === "compteCree" && (
          <div>
            <Toast messageToast={"Un email vous a été envoyé"} />
          </div>
        )}
        {messageToast === "deconnexion" && (
          <div>
            <Toast messageToast={"Vous avez été déconnecté"} />
          </div>
        )}
        {messageToast === "offrePostee" && (
          <div>
            <Toast messageToast={"Votre offre a bien été posté"} />
          </div>
        )}
        {messageToast === "erreurOffrePostee" && (
          <div>
            <Toast messageToast={"Une erreur est survenue"} />
          </div>
        )}
        {messageToast === "mdpChanged" && (
          <div>
            <Toast messageToast={"Votre mot de passe a été changé"} />
          </div>
        )}
        {/* Fin toast */}
      </div>
    );
  }
}

export default App;
