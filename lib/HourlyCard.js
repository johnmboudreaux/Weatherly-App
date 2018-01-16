import React from 'react';
import PropTypes from 'prop-types';

export default function HourlyCard(props) {
  return (
    <div className='hourly-card'>
      <h2 className='hour-time'>{ props.cardObject.FCTTIME.civil }</h2>
      <p className='hour-icon-status'>{ props.cardObject.icon }</p>
      <img className='hour-icon' src={ props.cardObject.icon_url }/>
      <h4 className='hour-temp'>Temp { props.cardObject.temp.english }</h4>
    </div>
  );
}

HourlyCard.propTypes = {
  cardObject: PropTypes.object
};
