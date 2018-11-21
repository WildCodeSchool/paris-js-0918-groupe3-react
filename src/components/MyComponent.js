import React, { Component } from 'react';
import { connect } from 'react-redux';

import { myAction1, myAction2 } from '../actions/myActions';

class MyComponent extends Component {
  render(){
    return(
      <div className='MyComponent'>
        {/* content */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  propName: state.stateName.stateProperty,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { myAction1, myAction2 })(MyComponent);
