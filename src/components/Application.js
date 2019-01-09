import React, { Component } from "react";
import { connect } from "react-redux";

import { getApplicationDescription, getApplicationQuestions } from "../actions/applicationActions";

class Application extends Component {
    state = {
        isLoading : true,
    }
  componentDidMount = async () => {
    await this.props.getApplicationDescription(this.props.match.params.id);
    await this.props.getApplicationQuestions([1,2]);
    this.setState({ isLoading :false })
  }


  render() {
    const { title, description, contract_type, place } = this.props.applicationDescription;
    const questions = this.props.applicationQuestions
    console.log("HELLOOOOOOO", questions)
    if(this.state.isLoading) return <div>LOADING</div> 
        else{
    return (
      <div className="Application">
        <div className="head">
          <h3>{title}</h3>
        </div>
        <div className="content">
          <div>
          </div>
          <div>
            <p>Descri : {description}</p>
            <p>Contract type : {contract_type}</p>
          </div>
          <div>
            <p>Place : {place}</p>
            <p>Place : {questions[0]}</p>
            {questions.map(e => {console.log(e.text); return <p>{e.text}</p>})}
          </div>
        </div>
      </div>
    );}
  }
}

const mapStateToProps = state => ({
  applicationDescription: state.application.applicationDescription,
  applicationQuestions: state.application.applicationQuestions,
});

export default connect(
  mapStateToProps,
  { getApplicationDescription, getApplicationQuestions }
)(Application);
