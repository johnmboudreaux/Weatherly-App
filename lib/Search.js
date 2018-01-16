import React from 'react';
import CityList from '../utils/CityList';
import Trie from '../utils/Trie';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.trie = {};
    this.state = {
      location: '',
      suggestions: []
    };
  }

  componentDidMount() {
    const trie = new Trie();
    trie.populate(CityList);
    this.trie = trie;
  }

  getValue(event) {
    const suggestions = this.trie.suggest(event.target.value);
    this.setState({
      location: event.target.value,
      suggestions
    });
  }

  handleClick(event) {
    this.props.getData(event.target.innerHTML);
    document.querySelector('.location-search').value = '';
    this.setState({
      suggestions: []
    });
  }

  render() {
    const mappedSuggestions = this.state.suggestions.map((city, index) =>
      <a key={index}
         className="anchor-links"><li
              className="city-name"
              onClick={ (event) => this.handleClick(event)}
              >{city}
      </li></a>
      );

    return (
      <section className="search">
        <div className="user-inputs">
          <input
                 className="location-search second-search"
                 type="text"
                 placeholder="Enter a City, State or Zipcode"
                 onChange={this.getValue.bind(this)}
                />
          <button
                  type="submit"
                  className="sub-btn"
                  onClick={ () => {
                    this.props.getData(this.state.location);
                  }
                }
                >Submit
          </button>
        </div>
        <div className="outputs">
          <ul className="add-suggestions">{mappedSuggestions}</ul>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  getData: PropTypes.func
};
