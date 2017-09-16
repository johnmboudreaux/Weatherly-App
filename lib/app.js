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
      today: {},
      currentCity: {},
      hourlyCards: [],
      tenDay: [],
      status: false,
    };
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    // if(localStorage.getItem('city')){
    //   const retrievedLocal = localStorage.getItem('city');
    //   this.getData(retrievedLocal)
    // }
  }

  localStorageSet(location) {
    localStorage.setItem('city', location);
  }

  getData(location) {
    this.localStorageSet(location);
    fetch(`http://api.wunderground.com/api/7a3b7d333af5705c/conditions/forecast10day/hourly/q/${location}.json`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      this.setState({ today: data.forecast.simpleforecast.forecastday[0],
                      tenDay: data.forecast.simpleforecast.forecastday,
                      currentCity: data.current_observation,
                      hourlyCards: data.hourly_forecast.splice(0, 7),
                      status: true,
                    });
    })
    .catch(() => {
      alert('Please enter a valid  City, State or Zip Code');
    });
  }


  render() {
    return (
      <div className="App">
        {
          !this.state.status && <Welcome
          getData={this.getData}
        />}
          {
              this.state.status && <CurrentWeather
              high={this.state.today.high.fahrenheit}
              low={this.state.today.low.fahrenheit}
              day={this.state.today.date.weekday}
              month={this.state.today.date.month}
              date={this.state.today.date.day}
              year={this.state.today.date.year}
              conditions={this.state.today.conditions}
              icon={this.state.today.icon_url}
              city={this.state.currentCity.display_location.full}
            />
          }

          {
             this.state.status && <HourlyCards
            hourlyCardsArray={this.state.hourlyCards}
            />
          }

          {
             this.state.status && <DailyCards
            dailyCardsArray={this.state.tenDay}
            />
          }

      </div>
    );
  }
}
