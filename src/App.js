import React, { Component } from 'react';
import './App.css';
import Wishes from "./components/Greetings"
import CURD from "./components/CURD"

class App extends React.Component{
render(){
return(
  <div className= "App">
      <Wishes/>
      <CURD/>
  </div>
    )
   }
 }
export default App

