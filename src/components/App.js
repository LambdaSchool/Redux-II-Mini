import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchData } from '../actions/'
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchData()
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
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

const mapStateToProps = ({ charsReducer: state }) => {
  return {
    fetching: state.fetching,
    error: state.error,
    chars: state.chars,
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

export default connect(mapStateToProps, {
 fetchData
})(App);
