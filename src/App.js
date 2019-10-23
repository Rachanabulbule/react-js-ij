import React, { Component } from 'react';
import './App.css';
import Wishes from "./components/Greetings"
import CRUD from "./components/CRUD"

class App extends React.Component{
render(){
return(
  <div className= "App">
      <Wishes/>
      <CRUD/>
  </div>
    )
   }
 }
export default App

