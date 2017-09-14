import React, { Component }from 'react';
import Welcome from './Welcome.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '' || 'denver',
    }
    this.setValue = this.setValue.bind(this);
    this.getData = this.getData.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`http://api.wunderground.com/api/461df5c547de2ad6/conditions/hourly/forecast10day/q/${this.state.value}.json`)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error retreiving weather: ', error));
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
