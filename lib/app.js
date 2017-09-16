import React, { Component } from 'react';
import Welcome from './Welcome';
import HourlyCards from './HourlyCards';
import DailyCards from './DailyCards';
import CurrentWeather from './CurrentWeather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      today: {},
      currentCity: {},
      hourlyCards: [],
      tenDay: [],
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
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/conditions/forecast10day/hourly/q/CO/${this.state.inputValue}.json`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.setState({ today: data.forecast.simpleforecast.forecastday[0],
                      tenDay: data.forecast.simpleforecast.forecastday,
                      currentCity: data.current_observation,
                      hourlyCards: data.hourly_forecast.splice(0, 7),
                    });
    });
  }

  changeCity() {
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/forecast/geolookup/conditions/hourly/q/CO/Denver.json`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.setState({ today: data.forecast.simpleforecast.forecastday[0],
                      tenDay: data.forecast.simpleforecast.forecastday,
                      currentCity: data.location,
                      hourlyCards: data.hourly_forecast.splice(0, 7),
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
              city={this.state.currentCity.observation_location
.city}
            />
          }

          {
             <HourlyCards
            hourlyCardsArray={this.state.hourlyCards}
            />
          }

          {
             <DailyCards
            dailyCardsArray={this.state.tenDay}
            />
          }

      </div>
    );
  }
}


// tomorrow: data.forecast.simpleforecast.forecastday[1].conditions
