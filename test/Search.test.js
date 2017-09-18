import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import CompleteMe from '../utils/Trie';
import CityList from '../utils/CityList';

describe('Search', () => {
  it('should have a ', () => {
    const search = mount(<Search getData={ jest.fn() }/>);
    const input = search.find('input');
    // const trie = new CompleteMe();
    // trie.populate(CityList);
    const btn = search.find('button');

    expect(search.state('location')).toEqual('');

    const userInput = { target: { value: 'Baton Rouge, LA' } };
    input.simulate('change', userInput);
    btn.simulate('click');

    expect(search.state('location')).toEqual('Baton Rouge, LA');
  });
});
