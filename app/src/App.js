import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "./actions";
import Character from "./components/Character";
import "./App.css";

function App(props) {
  const fetchCharacters = e => {
    e.preventDefault();
    props.getCharacters();
  };

  return (
    <div className="App">
      <h1>Rick & Morty Characters</h1>
      {props.isFetching && <p>Fetching Characters</p>}
      <div>
        {props.characters.map(character => (
          <Character character={character} />
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCharacters}>Get Characters</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCharacters })(App);
