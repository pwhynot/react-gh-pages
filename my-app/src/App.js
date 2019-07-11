import React, { Component } from "react";
import Card from "./components/Card/card";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/Header";
import Container from "./components/Container/container";
import characters from "./characters.json";


  class App extends Component {
    state = { 
      characters 
    }
    
    render() {
      return (<div>
        <Navbar />
        <Header />
        <Container>
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
            />
          ))}
        </Container>
      
      </div>
      );
  
    }
}

export default App;
