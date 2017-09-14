import React, { Component }from 'react';
import Welcome from './Welcome.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    // this.setValue = this.setValue.bind(this);
    // this.getData = this.getData.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CA/San_Francisco.json')
    .then((response) => response)
    .then(data => console.log(data))
    .catch(error => console.log('Error retreiving jokes!: ', error));
  }

  setValue(value) {
    this.setState({ value: value })
  }
  render() {
    return (
     <div>
       <p> Hi </p>
       <Welcome value={this.setValue}
          getData={this.getData}/>
     </div>
    );
  }
}
