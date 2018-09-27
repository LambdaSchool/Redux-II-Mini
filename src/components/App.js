import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { fetchStarWarsPeeps } from '../actions';

class App extends Component {
	componentDidMount() {
		// call our action
		this.props.fetchStarWarsPeeps();
	}

	render() {
		return (
			<div className="App">
				{this.props.fetching ? (
					<img src={logo} className="App-logo" alt="logo" />
				) : (
					<ul>
						{this.props.chars.map((char) => {
							return <li key={char.name}>{char.name}</li>;
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		chars: state.charsReducer.chars,
		error: state.charsReducer.error,
		fetching: state.charsReducer.fetchingStarWarsPeeps,
	};
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
	mapStateToProps,
	{
		/* actions go here */
		fetchStarWarsPeeps,
	}
)(App);
