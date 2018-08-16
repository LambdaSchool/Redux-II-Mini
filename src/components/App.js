import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { getCharacters } from "../actions";


class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <h1>hello</h1>
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state

const mapStateToProps = state => {
  //console.log(state);
  return {
    chars: state.chars,
    isFetching: state.isFetching,
    hasErrors: state.hasErrors
  };
};

const mapDispatchToProps = dispatch => ({
  getCharacters: () => {
    dispatch(getCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);