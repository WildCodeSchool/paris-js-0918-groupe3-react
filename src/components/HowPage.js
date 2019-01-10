import React, { Component } from "react";

import "./css/HowPage.scss";

class HowPage extends Component {
  render() {
    return (
      <div className="HowPage">
        <div className="container p-4">
          <div className="row">
            <div className="col text-center">
              <h4>
                Voici quelques exemples de réponses que vous pourriez donner
              </h4>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>1</h2>
              </div>
              <div className="row p-2">
                <p>
                  Directeur financier d’une PME spécialiste dans la distribution
                  de fruits et légumes, vous postulez ailleurs. Votre grande
                  fierté : un projet, réussi, d’élaboration d’une nouvelle
                  recette et son exportation en Amérique du Nord.{" "}
                  <b>
                    Dans le magazine interne de votre entreprise, il y a eu un
                    article sur le sujet.
                  </b>{" "}
                  Et bien, en plus du questionnaire, vous joignez cet article !
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>2</h2>
              </div>
              <div className="row p-2">
                <p>
                  Réputée pour vos qualités rédactionnelles, vous souhaitez être
                  la « plume » d’une élue. Outre le questionnaire de «
                  dessine-moi un job »,{" "}
                  <b>
                    vous joignez un projet d’éditorial du dernier magazine de la
                    collectivité locale concernée,
                  </b>
                  c’est-à-dire l’éditorial tel que vous l’auriez écrit.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4 ">
              <div className="row justify-content-center">
                <h2>3</h2>
              </div>
              <div className="row p-2">
                <p>
                  3) Votre passion, c’est l’aménagement d’intérieur. Vous
                  postulez auprès d’une chaîne de grande distribution qui
                  cherche à réaménager ses magasins. En plus de répondre à notre
                  questionnaire, vous réalisez un{" "}
                  <b>« book » avec des dessins ou des photos</b> de ce qui
                  serait, pour vous, le magasin idéal.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4 ">
              <div className="row justify-content-center">
                <h2>4</h2>
              </div>
              <div className="row p-2">
                <p>
                  Vous travaillez dans le marketing pour un journal. Mais votre
                  passion, c’est l’écologie : vous postulez comme responsable
                  des relations institutionnelles et médias d’une association
                  écologiste. Vous avez fait une{" "}
                  <b>
                    formation pour être apiculteur et écrit un article sur
                    l’importance des abeilles pour la biodiversité :
                  </b>{" "}
                  dites-le nous et joignez l’article !
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>5</h2>
              </div>
              <div className="row p-2">
                <p>
                  Habituée à gérer les interventions écrites ou orales,
                  l’agenda, les déplacements, les relations publiques d’un
                  dirigeant d’une grande entreprise, vous voulez changer de
                  secteur et travailler dans le domaine de la culture.{" "}
                  <b>
                    Décrivez ce que ses capacités d’organisation et d’expression
                    peuvent apporter à l’entreprise où vous postulez.
                  </b>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-3 p-lg-4">
              <div className="row justify-content-center">
                <h2>6</h2>
              </div>
              <div className="row p-2">
                <p>
                  Vous êtes passionné par les séries. Vous postulez auprès des
                  réalisateurs de l’une de vos séries préférées. Le
                  questionnaire rempli, vous lui adressez un{" "}
                  <b>
                    projet de scénario pour la saison qui n’a pas encore été
                    diffusée.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowPage;
