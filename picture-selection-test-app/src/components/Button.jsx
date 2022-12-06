import React from 'react';
import './Button.css';

export default function Button(props) {
  function handleClick(event) {
    props.onClick(event)
    console.log("Button is clicked");
  }
  const color= props.index !== -1 && ( props.index === props.correctIndex ? "green" : "red");
  return <button className={props.className+" "+color} onClick={handleClick}>
     <img src={props.src} alt=""/>
     {props.index !== -1 && <img className= "aft-clic1" src={`no.${props.index+1}.jpg`} alt="clicked" />}
     
     </button>;

}