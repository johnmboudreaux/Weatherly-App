import React, { Component } from 'react';
import Welcome from './Welcome';
// export default function App() {}

export default class App extends Component {
  constructor(props) {
  // debugger;
    super(props);
    this.state = {
      inputValue: '',
      today: '',
      tomorrow: '',
    };

    this.changeCity = this.changeCity.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  changeCity() {
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CO/${this.state.inputValue}.json`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ today: data.forecast.simpleforecast.forecastday[0].conditions,
                      tomorrow: data.forecast.simpleforecast.forecastday[1].conditions });
    });
  }

  updateInput(event) {
    //  this is where we will connect our complete me
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="App">

          <input type="text" value={this.state.inputValue} onChange={this.updateInput}/>

          <button onClick={this.changeCity}>See Weather</button>

          <h1>Today</h1>
          <p>{this.state.today}</p>
          <h1>Tomorrow</h1>
          <p>{this.state.tomorrow}</p>

      </div>
    );
  }
}
