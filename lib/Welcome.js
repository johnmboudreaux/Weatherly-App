import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  render() {
    return (
      <div className='searchForm'>
        <input
               className='searchInput'
               type='text'
               placeholder='search by city, state or zip'
               value={this.state.value}
               onChange={(event) => {
                 this.setState({ value: event.target.value });
               }}>
        </input>

        <button className='submit-btn' onClick={ () => {
          // this.setState({ value: 'gim-gimmesum' });
          this.setState({ value: event.target.value });
        }}>Weatha Mutha Fucka</button>
      </div>
    );
  }
}
