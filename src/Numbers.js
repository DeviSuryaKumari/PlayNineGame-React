import React, { Component } from 'react';

const Numbers = (props) => {
   //const arrayOfNums = [1,2,3,4,5,6,7,8,9];
   const numberClassName = (num) => {
     if(props.usedNums.indexOf(num) >= 0)
       return 'used';
     if(props.selected.indexOf(num) >= 0)
       return 'selected';
   };
   return(
     <div className="card text-center">
       <div>
         { Numbers.arrayOfNums.map( (number,i) => 
            <span key={i} className={numberClassName(number)} onClick={ () => {props.selectNumber(number)} }>
               {number}
            </span> )
         }
       </div>
     </div>
   );
 };
 Numbers.arrayOfNums = [1,2,3,4,5,6,7,8,9];
export default Numbers;
