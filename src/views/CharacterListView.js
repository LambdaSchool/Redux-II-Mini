import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { getCharacters } from '../actions';



class CharacterListView extends React.Component {
  

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <h1>Fetching the characters</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
