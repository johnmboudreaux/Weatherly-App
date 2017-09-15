import React, { Component } from 'react';
import Welcome from './Welcome';
import HourlyCards from './HourlyCards';
import CurrentWeather from './CurrentWeather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      today: {},
      currentCity: {},
      hourlyCards: [],
    };

    this.changeCity = this.changeCity.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    // this.getData();
  }

  getData() {
    fetch(`http://api.wunderground.com/api/461df5c547de2ad6/conditions/hourly/forecast10day/q/CO/${this.state.value}.json`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error retreiving weather: ', error));
  }

  changeCity() {
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CO/Denver.json`)
    .then(response => response.json())
    .then((data) => {
      this.setState({ today: data.forecast.simpleforecast.forecastday[0],
                      currentCity: data.location,
                      hourlyCards: data.hourly_forecast,
                    });
    });
  }

  updateInput(event) {
    //  this is where we will connect our complete me
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div className="App">

           <p> Hi </p>
          <Welcome
          getData={this.getData} />
          <input type="text" value={this.state.inputValue} onChange={this.updateInput}/>

          <button onClick={this.changeCity}>See Weather</button>

          <h1>Today</h1>
          <h1>Tomorrow</h1>

          {
            Object.keys(this.state.today).length && <CurrentWeather
              high={this.state.today.high.fahrenheit}
              low={this.state.today.low.fahrenheit}
              day={this.state.today.date.weekday}
              month={this.state.today.date.month}
              date={this.state.today.date.day}
              year={this.state.today.date.year}
              conditions={this.state.today.conditions}
              icon={this.state.today.icon_url}
              city={this.state.currentCity.city}
            />
          }

          {
           <HourlyCards
            hourlyCardsArray={this.state.hourlyCards}
            />
          }

      </div>
    );
  }
}


// tomorrow: data.forecast.simpleforecast.forecastday[1].conditions
