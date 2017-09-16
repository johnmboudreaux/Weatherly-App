import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    // this.state = {
    //   value: '',
    // };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleClick(props) {
    this.props.getData(props.value);

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
               onChange={this.handleInputChange}>
        </input>

        <button className='submit-btn' onClick={this.handleClick}>
          Weatha Mutha Fucka</button>
      </div>
    );
  }
}

//  value={this.state.value}
