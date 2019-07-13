import React, { Component } from "react";
import Card from "./components/Card/card";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/Header";
import Container from "./components/Container/container";
import characters from "./characters.json";


function ShuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
  class App extends Component {
    state = { 
      characters,
      score: 0,
      highScore: 0,
      wrong: "",
      clicked: [], 
    };
    handleClick = id => {
      if (this.state.clicked.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id) });
      } else {
        this.handleReset();
      }
    };
    handleIncrement = () => {
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        wrong: ""
      });
      if (newScore >= this.state.highScore) {
        this.setState({ highScore: newScore });
      }
      else if (newScore === 12) {
        this.setState({ wrong: "Incorrect Guess" });
      }
      this.handleShuffle();
    };
    handleReset = () => {
      this.setState({
        score: 0,
        highScore: this.state.highScore,
        wrong: "Game Over!",
        clicked: []
      });
      this.handleShuffle();
    }
    handleShuffle = () => {
      let shuffledCharacters = ShuffleCharacters(characters);
      this.setState({ characters: shuffledCharacters });
    };
    
    render() {
      return (<div>
        <Navbar />
        <Header> 
          score={this.state.score}
          highScore={this.state.highScore}
          wrong={this.state.wrong}
        </Header>
        <Container>
          {this.state.characters.map(character => (
            
            <Card
              id= {character.id}
              key= {character.id}
              image= {character.image}
              name= {character.name}
              handleClick= {this.handleClick}
              handleIncrement= {this.handleIncrement}
              handleReset= {this.handleReset}
              handleShuffle= {this.handleShuffle}
            />
          ))}
        </Container>
      
      </div>
      );
  
    }
}

export default App;
