import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleClick() {
    this.props.getData(this.state.value);

    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <div className='searchForm'>
        <input
               className='searchInput'
               type='text'
               placeholder='search by city, state or zip'
               value={this.state.value}
               onChange={this.handleInputChange}>
        </input>

        <button className='submit-btn' onClick={this.handleClick}>
          Weatha Mutha Fucka</button>
      </div>
    );
  }
}
