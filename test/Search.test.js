import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import Trie from '../utils/Trie.js'

describe('Search', () => {
  it('should change state baced on the input', () => {
    const search = mount(<Search />);
    const input = search.find('input');


    expect(search.state('location')).toEqual('');

    const inputValue = { target: { value: 'Baton Rouge' } };

    input.simulate('change', inputValue);

    expect(search.state('location')).toEqual('Baton Rouge');
  });

  it('fire a function on click', () => {
    const mkFun = jest.fn()
    const search = mount(<Search getData={mkFun}/>);
    const btn = search.find('button');
    console.log(btn.debug())
    btn.simulate('click')

    expect(mkFun).toHaveBeenCalledTimes(1)
  });
});
