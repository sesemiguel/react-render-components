import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(){
  return(<h1>This is my navbar area.</h1>)
}

function MainContent(){
  return(<h1>This is my main content area.</h1>)
}

ReactDOM.render(
  <div><Navbar /> <MainContent /></div>,
  document.getElementById("root")
);