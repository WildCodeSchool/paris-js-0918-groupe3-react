import React, { Component } from "react";
// import { connect } from 'react-redux';
import NewOfferQuestions from "./NewOfferQuestions";
import NewQuestion from "./NewQuestion";

class NewOfferContainer extends Component {
  render() {
    return (
      <div>
        <NewOfferQuestions />
        <NewQuestion />
      </div>
    );
  }
}

export default NewOfferContainer;

// const mapStateToProps = state => ({
//     propName: state.stateName.stateProperty,
//     //add here the props you need from the store state
//   });

//   export default connect(mapStateToProps, {  })(NewOfferContainer)
