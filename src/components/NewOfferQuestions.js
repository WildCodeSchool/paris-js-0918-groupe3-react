import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOriginalQuestions } from '../actions/newOfferActions';

import NewOfferQuestion from './NewOfferQuestion';



 class NewOfferQUestions extends Component {

  componentWillMount() {
    this.props.getOriginalQuestions();
  }

  render() {
    const { questionsList } = this.props;
    return (
      <div className="NewOfferQuestions">
        <h3>Questions diponibles</h3>
        <fieldset name='questionsList' className='questionsList'>
          {questionsList.map(q => 
            <NewOfferQuestion 
              key={q.id}
              id={q.id}
              text={q.text}
            />
          )}
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
  //add here the props you need from the store state
});

export default connect(mapStateToProps, { getOriginalQuestions })(NewOfferQUestions);
