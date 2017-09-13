import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }


// const Welcome = ({ getData }) => {
  render({ getData }) {
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

        <button className='submit-btn' onClick={getData}>
          Weatha Mutha Fucka</button>
      </div>
    );
  }
// export default Welcome;
}
