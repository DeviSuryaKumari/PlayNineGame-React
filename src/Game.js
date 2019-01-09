import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component{
  state = {
     selectedNums : [],
     randomNumOfStars : Math.floor((Math.random() * 9)) + 1,
  };
  selectNumber = (clickedNum) => {
     if(this.state.selectedNums.indexOf(clickedNum) >= 0) 
        return;
     this.setState( (prevState) => ({selectedNums : prevState.selectedNums.concat(clickedNum)}) );
  };
  unselectNumber = (clickedNum) => {
     this.setState( (prevState) => ({selectedNums : prevState.selectedNums.filter(number => number !== clickedNum)}) 
     );
  };
   render(){
      return(
        <div className="container">
          <h3>Play Nine</h3>
          <hr />
          <div className="row">
             <Stars randomNumOfStars={this.state.randomNumOfStars}/>
             <Button selected={this.state.selectedNums}/>
             <Answer selected={this.state.selectedNums} unselectNumber={this.unselectNumber}/>
          </div>
          <br />
          <Numbers selected={this.state.selectedNums} selectNumber={this.selectNumber}/>
        </div>
      );
   }
}

export default Game;
