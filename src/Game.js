import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';

class Game extends React.Component{
   state = {
      selectedNums : [],
      randomNumOfStars : Math.floor((Math.random() * 9)) + 1,
      ansIsCorrect : null,
      usedNums : [],
      redrawNum : 5,
      doneStatus : null,
   };
   selectNumber = (clickedNum) => {
      if(this.state.selectedNums.indexOf(clickedNum) >= 0) 
         return;
      this.setState( (prevState) => ({selectedNums : prevState.selectedNums.concat(clickedNum), ansIsCorrect : null}) );
   };
   unselectNumber = (clickedNum) => {
      this.setState( (prevState) => ({selectedNums : prevState.selectedNums.filter(number => number !== clickedNum), ansIsCorrect : null}) 
      );
   };
   checkAnswer = () => {
      this.setState((prevState) => 
      ({ ansIsCorrect : prevState.randomNumOfStars === prevState.selectedNums.reduce((acc, n) => acc+n, 0)})
      );
   };
   acceptAnswer = () => {
        this.setState( (prevState) =>
         ({usedNums : prevState.usedNums.concat(prevState.selectedNums),
            selectedNums : [],
            randomNumOfStars : Math.floor((Math.random() * 9)) + 1,
            ansIsCorrect : null,
            })
        );
   };
   redraw = () => {
        this.setState( (prevState) =>
           ({redrawNum : prevState.redrawNum - 1,
            selectedNums : [],
            randomNumOfStars : Math.floor((Math.random() * 9)) + 1,
            ansIsCorrect : null,})
        );
   };
    render(){
       return(
         <div className="container">
           <h3>Play Nine</h3>
           <hr />
           <div className="row">
              <Stars randomNumOfStars={this.state.randomNumOfStars}/>
              <Button selected={this.state.selectedNums} ansIsCorrect={this.state.ansIsCorrect} checkAnswer={this.checkAnswer} acceptAnswer={this.acceptAnswer}
              redraw={this.redraw} redrawNum={this.state.redrawNum}/>
              <Answer selected={this.state.selectedNums} unselectNumber={this.unselectNumber}/>
           </div>
           <br />
           {
              this.state.doneStatus ? <DoneFrame doneStatus={this.state.doneStatus}/> :
              <Numbers selected={this.state.selectedNums} selectNumber={this.selectNumber} usedNums={this.state.usedNums}/>
           }
         </div>
       );
    }
}

export default Game;
