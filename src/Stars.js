import React, { Component } from 'react';

const Stars = (props) => {
   //const numOfStars = Math.floor((Math.random() * 9)) + 1;
   let stars = [];
   for(let i = 0; i < props.randomNumOfStars; i++){
      stars.push(<i key={i} className="fa fa-star"></i>);
   }
    return(
      <div className="col-5">
        {stars}
      </div>
    );
 };

export default Stars;
