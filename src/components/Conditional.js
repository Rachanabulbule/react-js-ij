import React from "react"

function Conditional(props){
    return(
        <div>
        {props.isLoading ?
         <h3>Hi...</h3> :
        <h3>Enter your name and address and perform some CRUD operations on the same...</h3>}
        </div>
    )
}
export default Conditional