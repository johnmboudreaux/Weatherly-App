import React from 'react';
import data from './Data'

export default function CurrentWeather() {
  return (
    <div>
      <h2></h2>
      <p>{this.data.current_observation.full}</p>
    </div>
  );
}
