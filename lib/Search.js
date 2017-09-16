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

    const mappedSuggestions = this.state.suggestions.map((city, index) =>
      <button
              className="city-name"
              key={index}
              onClick={ (e) => this.handleClick(e)}
              >{city}
      </button>
      );

    return (
      <div className="search">
        <div className="user-inputs">
          <input type="text"
                 placeholder="Enter a City"
                 className="city-search"
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
          <section className="addSuggestions">{mappedSuggestions}</section>
        </div>
      </div>
    );
  }
}
