import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewQuestion } from "../actions/newOfferActions";

import "./css/NewQuestion.scss";
import iconAdd from "../images/icons/iconAdd.png";

class NewQuestion extends Component {
  state = {
    newQuestion: ""
  };

  handleChange = e => {
    this.setState({
      newQuestion: e.target.value,
      showMsgFieldEmpty: false
    });
  };

  handleCheckField = () => {
    const { newQuestion } = this.state;
    if (newQuestion.length !== 0) {
      this.props.postNewQuestion(newQuestion);
      this.setState({
        newQuestion: "",
      });
    } else {
      this.setState({
        showMsgFieldEmpty: true
      });
    }
  };

  render() {
    const { newQuestion, showMsgFieldEmpty } = this.state;
    console.log(newQuestion);
    return (
      <div className="NewQuestion">
        <div className="row align-items-center mt-3">
          <div className="col-10 col-md-11">
            <textarea
              value={newQuestion}
              onChange={this.handleChange}
              placeholder="Ajouter une question..."
            />
          </div>
          <div className="col-2 col-md-1">
            <img src={iconAdd} alt="" onClick={this.handleCheckField} />
          </div>
        </div>
        {showMsgFieldEmpty && (
          <div className="row">
            <div className="col msgFieldempty">
              <p>
                Veuillez remplir le champ avant de poster une nouvelle question
              </p>
            </div>
          </div>
        )}
        <div className="row justify-content-start align-items-center mb-3">
          <div className="col-1 p-0">
            <input type="checkbox" name="" value="" />
          </div>
          <div className="col-auto ">
            <span className="align-middle">Joindre un fichier</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  questionsList: state.newOffer.questionsList
});

export default connect(
  mapStateToProps,
  { postNewQuestion }
)(NewQuestion);
