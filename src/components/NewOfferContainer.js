import React, { Component } from 'react';
// import { connect } from 'react-redux';
import NewOfferQuestions from './NewOfferQuestions';

class NewOfferContainer extends Component {
  render() {
    return (
      <div>
        <NewOfferQuestions />
      </div>
    )
  }
}

export default NewOfferContainer;

// const mapStateToProps = state => ({
//     propName: state.stateName.stateProperty,
//     //add here the props you need from the store state
//   });
  
//   export default connect(mapStateToProps, {  })(NewOfferContainer)