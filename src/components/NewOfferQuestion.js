import React from 'react';

const NewOfferQuestion = (props) => {
  const { id, text, handleBoxChange } = props;
  return (
    <div className="NewOfferQuestion">
      <input type='checkbox' name={`question${id}`} value={id} onChange={handleBoxChange} />
      <span>{text}</span>
    </div>
  );
}

export default NewOfferQuestion;
