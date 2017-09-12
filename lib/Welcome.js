import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className='searchForm'>
        <input type='text'
               placeholder='search by city, state or zip'
               value={this.state.value}
               onChange={(event) => {
                 this.setState({ value: event.target.value });
               }}>
        </input>
        {/* <button onClick={ () => {
          this.setState({ deeds: updatedDeeds, value: '' });
        }}>Add</button> */}

      </div>
    );
  }
}
