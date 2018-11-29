import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOriginalQuestions } from '../actions/newOfferActions';

import NewOfferQuestion from './NewOfferQuestion';

class NewOfferQuestions extends Component {

  componentDidMount() {
    this.props.getOriginalQuestions();
  }

  render() {
    const { questionsList } = this.props;
    return (
      <div className="NewOfferQuestions">
        <h3>Questions diponibles</h3>
        <div name='questionsList' className='questionsList'>
          {questionsList.map(q => 
            <NewOfferQuestion 
              key={q.id}
              id={q.id}
              text={q.text}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questionsList : state.newOffer.questionsList,
});

export default connect(mapStateToProps, { getOriginalQuestions })(NewOfferQuestions);
