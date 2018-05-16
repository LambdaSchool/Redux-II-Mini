import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { FETCH_AVENGERS, FETCHING_AVENGERS } from '../actions'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.avengers.map(char => {
              return <li key={char}>{char}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  console.log(state);
  return {
    avengers: state.avengers,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, {
  FETCH_AVENGERS, FETCHING_AVENGERS 
})(App);
