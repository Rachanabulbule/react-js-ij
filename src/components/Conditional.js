import React from "react"

function Conditional(props){
    if(props.isLoading===true){
        return(
        <footer>Hi...</footer>
        )
    }
    return(
        <footer>Enter your name and address...</footer>
    )
}
export default Conditional