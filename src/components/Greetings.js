import React, {Component} from 'react'

class Greetings extends React.Component{
render(){
  const date = new Date()
  const hours = date.getHours()
  const styles = { fontSize: 30}
  var timeOfDay
  if(hours<12){timeOfDay = "Morning"}
  else if(hours>=12&&hours<17){
      timeOfDay = "Afternoon"
  }
  else{timeOfDay = "Evening"}

return(<header className="Greeting">
    <h1 style={styles}>Good {timeOfDay}</h1>
    </header>
  )
}
}
export default Greetings
