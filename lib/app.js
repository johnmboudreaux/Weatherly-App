import React, { Component } from 'react';
import Welcome from './Welcome';
import HourlyCards from './HourlyCards';
import DailyCards from './DailyCards';
import CurrentWeather from './CurrentWeather';
import Search from './Search';

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
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    // this.getData();
  }

  getData(location) {
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/conditions/forecast10day/hourly/q/${location}.json`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ today: data.forecast.simpleforecast.forecastday[0],
                      tenDay: data.forecast.simpleforecast.forecastday,
                      currentCity: data.current_observation,
                      hourlyCards: data.hourly_forecast.splice(0, 7),
                    });
    });
  }

  // updateInput(event) {
  //   this.setState({ inputValue: event.target.value });
  // }

  render() {
    return (
      <div className="App">
        <p>Welcome</p>
          <Welcome
          getData={this.getData}
        />
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
              city={this.state.currentCity.observation_location.city}
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
