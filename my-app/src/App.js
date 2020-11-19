import React from 'react'
import './App.css';
import UserContainer from './UserContainer'

export default function App(){
  return (
    <div className="App">
    <header className="App-header">
      <p className="HomeTagInHeader">Home</p>
    </header>

    <div className="User-Container"></div>

    <UserContainer/>


    </div>
  );
}


