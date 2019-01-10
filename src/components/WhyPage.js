import React, { Component } from "react";

import "./css/WhyPage.scss";

class WhyPage extends Component {
  render() {
    return (
      <div className="WhyPage">
        <div className="container p-4">
          <div className="row">
            <div className="col text-center">
              <h4>Pourquoi cette plateforme de recherche d’emplois ?</h4>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>1</h2>
              </div>
              <div className="row p-2">
                <h6>
                  Avec Internet, le CV et la lettre de motivation perdent de
                  leur intérêt.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  Chaque recruteur en fait l’expérience : à peine une offre
                  d’emploi est-elle rendue publique, qu’en quelques heures, sa
                  boîte mail se retrouve saturée. La profusion créé la confusion
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>2</h2>
              </div>
              <div className="row p-2">
                <h6>
                  Implication, Initiative, Imagination : au travail, ces 3 « i »
                  sont, plus que jamais, des vertus fondamentales.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  C’est dès le processus de recrutement que « Dessine-moi un job
                  » propose de les intégrer.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4 ">
              <div className="row justify-content-center">
                <h2>3</h2>
              </div>
              <div className="row p-2">
                <h6>
                  Grâce à l’anonymat jusqu’à l’entretien d’embauche, les biais
                  qui traversent le monde du travail sont atténués.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  Quels que soient le lieu de résidence, l’âge, la couleur de la
                  peau, le sexe, le handicap : tout le monde est à égalité.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4 ">
              <div className="row justify-content-center">
                <h2>4</h2>
              </div>
              <div className="row p-2">
                <h6>
                  La diversité des âges, des parcours, des personnalités, des
                  origines fait la richesse d’une entreprise.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  « Dessine-moi un job » permet au recruteur de prendre le
                  risque d’être surpris au moment de l’entretien d’embauche.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>5</h2>
              </div>
              <div className="row p-2">
                <h6>
                  Avec Internet, il est facile de trouver l’information sur
                  l’entreprise où l’on postule.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  Interview du chef d’entreprise, tribune, article dans la
                  presse spécialisée, etc. : le/la candidat-e, pour construire
                  sa candidature, peut et doit faire le nécessaire.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>6</h2>
              </div>
              <div className="row p-2">
                <h6>
                  Le / la candidat-e qui a l’expérience et les compétences
                  requises est capable de montrer les réalisations qui le
                  prouvent.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  Plutôt que quelques lignes sur un CV : un projet bien mené, un
                  article bien écrit, c’est plus parlant.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>7</h2>
              </div>
              <div className="row p-2">
                <h6>
                  C’est le talent des gens qui comptent, pas leur diplôme.
                </h6>
              </div>
              <div className="row p-2">
                <p>
                  On est trop souvent réduit à son parcours scolaire. Nous, plus
                  que ce que vous avez fait, ce qui nous intéresse, c’est ce que
                  vous pouvez faire !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyPage;
