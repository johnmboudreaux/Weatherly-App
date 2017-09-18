import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';


describe('App', () => {
    it('should render a welcome page', () => {
      const app = shallow(<App />);

      expect(app.find('.search-form')).toBeDefined();
    });
});
