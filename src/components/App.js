import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as F_Options from '../actions/index';
import { fetch,FETCHING, } from '../actions';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    this.props.fetch().chars;
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

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = state => {
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    
  };
};
export default connect(mapDispatchToProps, fetch )(App);
