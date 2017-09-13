import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    // this.getData = getData
    this.state = { value: '' };
    this.getData = this.getData.bind(this);

  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CA/San_Francisco.json')
    .then(response =>  response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error retreiving jokes!: ', error));
  }


// const Welcome = ({ getData }) => {
  render() {
    return (
      <div className='searchForm'>
        <input
               className='searchInput'
               type='text'
               placeholder='search by city, state or zip'
               value={this.state.value}
               onChange={(event) => {
                 this.setState({ value: event.target.value });
               }}>
        </input>

        <button className='submit-btn' onClick={this.getData}>
          Weatha Mutha Fucka</button>
      </div>
    );
  }
  }


// export default Welcome;
