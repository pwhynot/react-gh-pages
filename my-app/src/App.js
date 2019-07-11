import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Title>Characters List</Title>
        {this.state.characters.map(character => (
          <characterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
