import React from 'react';
// import '../Styles/Search.css';
import CityList from './CityList';
import Trie from './Trie';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.trie = {};
    this.state = {
      location: '',
      suggestions: [],
    };
  }

  componentDidMount() {
    const trie = new Trie();
    trie.populate(CityList);
    this.trie = trie;
  }

  getValue(e) {
    const suggestions = this.trie.suggest((e.target.value));
    this.setState({
      location: e.target.value,
      suggestions,
    });
  }

  handleClick(e) {
    this.props.getData(e.target.innerHTML);
  }

  render() {
    this.state.location === '' ? this.state.suggestions = [] : true;

    const mappedSuggestions = this.state.suggestions.map((city, i) =>
      <a className="ancor-links"><li
              className="city-name"
              key={i}
              onClick={ (e) => this.handleClick(e)}
              >{city}
      </li></a>
      );

    return (
      <section className="search">
        <div className="user-inputs">
          <input
                 className="location-search"
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
          <ul className="addSuggestions">{mappedSuggestions}</ul>
        </div>
      </section>
    );
  }
}
