import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div>
      <h2></h2>
      <p>{props.high}</p>
      <p>{props.low}</p>
      <p>{props.day}</p>
      <p>{props.month} / {props.date} / {props.year}</p>
      <p>{props.conditions}</p>
      {/* summary */}
    </div>
  );
}
