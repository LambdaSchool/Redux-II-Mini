import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.css';
// pull in actions from action/index

class App extends Component {
  componentDidMount() {
    // call our action
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h1> Loading... </h1>
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
export default connect(null, {
  /* actions go here */
})(App);
