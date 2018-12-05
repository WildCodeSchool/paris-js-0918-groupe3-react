import React, { Component } from 'react'

class Offer extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='Offer'>
        <img src ='' className='logo' alt='logo' />
        <div className='content'>
          <h3>{`${data.title} | ${data.contract_type} | ${data.updated_at}`}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    )
  }
}

export default Offer;
