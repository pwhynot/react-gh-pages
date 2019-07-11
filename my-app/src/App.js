import React, { Component } from "react";
import Card from "./components/Card/card";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import Wrapper from "./components/Wrapper/wrapper";
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
