import React from 'react'

function wishes(){
  const date = new date()
  const hours = date.getHours()
  const styles = { fontSize: 30}
  var timeOfDay 
  if(hours<12){timeOfDay = "Morning"}
  else if(hours>=12&&hours<17){
      timeOfDay = "Afternoon"
  }
  else{timeOfDay = "Evening"}

return(<main>
    <h1 style={styles}>Good {timeOfDay}</h1>
    </main>
  )
}
export default wishes
