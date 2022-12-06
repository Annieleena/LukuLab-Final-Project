import React from 'react';
import './Button.css';

export default function Button(props) {
  function handleClick(event) {
    props.onClick(event)
    console.log("Button is clicked");
  }
  return <button className={props.className} onClick={handleClick}
  >
     <img src={props.src} alt=""/>
     
     
  </button>;

}