import React, { Component } from 'react';
import dateFormat from 'dateformat';

dateFormat.i18n = {
  dayNames: [
      'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam',
      'dimanch', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'
  ],
  monthNames: [
      'Jan', 'Feb', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aut', 'Sep', 'Oct', 'Nov', 'Dec',
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ],
  timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
};

class Offer extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='Offer'>
        <img src ='' className='logo' alt='logo' />
        <div className='content'>
          <h3>{`${data.title} | ${data.contract_type} | ${dateFormat(data.updated_at, 'dd mmmm yyyy')}`}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    )
  }
}

export default Offer;
