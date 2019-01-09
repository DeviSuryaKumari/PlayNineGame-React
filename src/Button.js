import React, { Component } from 'react';

const Button = (props) => {
  let button;
  switch(props.ansIsCorrect){
  case true: 
    button = <button className="btn btn-success" onClick={props.acceptAnswer}>
                 <i className="fa fa-check"></i>
             </button>;
  break;
  case false:
    button = <button className="btn btn-danger">
                 <i className="fa fa-times"></i>
             </button>;
  break;
  default : 
    button = <button onClick={props.checkAnswer} className="btn" disabled={props.selected.length === 0}>=</button>;
  }
  return(
    <div className="col-2">
      {button}
    </div>
  );
};


export default Button;
