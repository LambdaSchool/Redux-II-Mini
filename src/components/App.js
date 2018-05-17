import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import { fetchChars } from '../actions';
// pull in actions from action/index
// import {fetchChars} from '../actions/index';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchChars()
  }
  render() {
    console.log(this.props)
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
const mapDispatchToProps = (state) => {
  console.log('STATE', state)
  return {
    chars:  state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    fetched: state.charsReducer.fetched
  }
}

export default connect(mapDispatchToProps, {fetchChars}) (App);
