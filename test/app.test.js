import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import localStorage from '../utils/mockLocalStorage';
// import CurrentWeather from '../lib/CurrentWeather'

describe('App', () => {
  it('should render a welcome page', () => {
    const app = shallow(<App/>);

    expect(app.find('.search-form')).toBeDefined();
  });

  it('should change state for today ', () => {
    const app = mount(<App/>);

    expect(app.state('today')).toEqual({});

    app.setState({
      today: {
        date: '11/23/1985',
      },
    });

    expect(app.state('today')).toEqual({ date: '11/23/1985' });
  });

  it('should change state for ten day ', () => {
    const app = mount(<App/>);

    expect(app.state('tenDay')).toEqual([]);

    app.setState({
      tenDay: [
        {
          date: '11/23/1985',
        },
      ],
    });

    expect(app.state('tenDay')).toEqual([
      {
        date: '11/23/1985',
      },
    ]);
  });

  it('should change state current city', () => {
    const app = mount(<App/>);

    expect(app.state('currentCity')).toEqual({});

    app.setState({
      currentCity: {
        Denver: 'Denver',
      },
    });

    expect(app.state('currentCity')).toEqual({ Denver: 'Denver' });
  });

  it('should change state hourly cards', () => {
    const app = mount(<App/>);

    expect(app.state('hourlyCards')).toEqual([]);

    app.setState({
      hourlyCards: [
        {
          date: '11/23/1985',
        },
      ],
    });

    expect(app.state('hourlyCards')).toEqual([
      {
        date: '11/23/1985',
      },
    ]);
  });
});
