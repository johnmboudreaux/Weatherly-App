import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

export default class Data extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CA/San_Francisco.json')
    .then((response) => { response.json() })
    .then(data => console.log(data))
    .catch(error => console.log('Error retreiving jokes!: ', error));
  }
  render() {
    return (
     <div>
       <p> Hi </p>
       <Welcome getData={this.getData} />
     </div>,
   document.getElementById('app')
    );
  }
}

// ReactDOM.render(
//   <div>
//     <Welcome />
//   </div>,
//   document.getElementById('app')
// );
