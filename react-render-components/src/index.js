import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(){
  return (
    <nav>
      <h1 className='navbar'>This is my navbar area.</h1>
      <ul className='links'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function MainContent(){
  return(<h1 className='main-content'>This is my main content area.</h1>)
}

const page = (
  <div>
    <Navbar /> 
    <MainContent />
  </div>

)

ReactDOM.render(
  page,
  document.getElementById("root")
);