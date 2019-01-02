import React from "react";
import "./output.css";

const userOutput = (props) =>{
  return (
    <div className="para">
    <p> Hii,my user name is {props.username} </p>
  </div>
  );
};


export default userOutput;
