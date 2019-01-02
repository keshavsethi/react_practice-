import React from "react";


const userInput = (props) =>{
  return (
    <div className="para">

    <input onChange={props.changed} type="text" value={props.useranme} />
  </div>
  );
};


export default userInput;
