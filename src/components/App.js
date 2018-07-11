import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { gettingChar } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.gettingChar();

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
const mapStateToProps = (state) => { // { charsReducer: state } ??? - if in index.js 'import rootReducer from './reducers/';
  console.log('state', state)
  return {
    chars: state.chars,
    fetching: state.fetching
  }
}
// the chars and the fetching boolean
export default connect(mapStateToProps, { gettingChar })(App);
