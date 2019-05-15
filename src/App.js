import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import anime from 'animejs'

const Wrapper = styled.div`

  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;

  .box {
    border: 1px solid #A55959;
    background-color: #FEEEEE;
  }

  .box:hover {
    background-color: #A55959;
    margin: 0px 10px 20px 10px;
  }

  h1 {
    background-color: white;
  }

`  

const TicTacToeBox = styled.div`

  height: 150px;
  width: 150px;
  margin: 10px;

`

const TicTacToeCont = styled.div`

  display: flex;
  flex-wrap: wrap;
  max-width: 516px;
  background-color: white;

`  

const ScoreBoard = styled.div`

  display: flex;
  justify-content: center;
  div {
    min-width: 150px;
    text-align: center;
  }

`

function createTicTacToeBoard() {

  for (var i = 0; i < 9; i++) {

  }

}

class TicTacToeBoard extends Component {

  state = {
    game: [0,0,0,0,0,0,0,0,0],
    turn: 1,
    player1Score: 0,
    player2Score: 0,
  }

  // 0 = blank
  // 1 = X
  // 2 = O

  componentDidMount() {

  }

  markBox(index, callbackFunction) {

    // First, check who's turn it is
    if (this.state.turn == 1) {
    
      // this.setState({ turn: 1 })
      // Function to change game variable
      console.log(this.state.turn)

      callbackFunction()

    } else {

      // Function to change game variable
      this.setState({ turn: 2 })
      console.log(this.state.turn)

      callbackFunction()

    }



  }

  // Function to check if game has been won
  checkGame() {

    // Function that checks the rows

    // Function that checks the columns

    // Function that checks diagonal 1

    // Function that checks diagonal 2

  }

  // Function that resets the game states after everything's done
  updateScore() {

    // Add score to winner

    // Update Scoreboard

    // Reset boxes

  }
 
  render() {
    return(
      <div>
      <TicTacToeCont>
        {/* Replace this wet code with a map function */}
        <TicTacToeBox id="box1" className="box" gameNumber={this.state.game[0]} onClick={this.markBox(0, this.checkGame)}/>
        <TicTacToeBox id="box2" className="box" gameNumber={this.state.game[1]} />
        <TicTacToeBox id="box3" className="box" gameNumber={this.state.game[2]} />
        <TicTacToeBox id="box4" className="box" gameNumber={this.state.game[3]} />
        <TicTacToeBox id="box5" className="box" gameNumber={this.state.game[4]} />
        <TicTacToeBox id="box6" className="box" gameNumber={this.state.game[5]} />
        <TicTacToeBox id="box7" className="box" gameNumber={this.state.game[6]} />
        <TicTacToeBox id="box8" className="box" gameNumber={this.state.game[7]} />
        <TicTacToeBox id="box9" className="box" gameNumber={this.state.game[8]} />
      </TicTacToeCont>
            <ScoreBoard>
            <div>
            <h1>X's</h1>
            <p>{this.state.player1Score}</p>
            </div>
            <div>
            <h1>0's</h1>
            <p>{this.state.player2Score}</p>
            </div>
    
          </ScoreBoard>
          </div>
    )
  }

}

function App() {
  return (
    <Wrapper>
      <h1>Tic Tac Toe Game Board</h1>
      <TicTacToeBoard />
    </Wrapper>
  );
}

export default App;
