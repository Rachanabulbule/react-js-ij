import React, {Component} from "react"
import Conditional from "./Conditional"

class CRUD extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: "CRUD application using ReactJs",
      action: 0,
      index: "",
      isLoading: true,
      idFromAPI: [],
      data: []
    }
  }

  componentDidMount(){
    this.refs.name.focus();
    setTimeout(()=>{
      this.setState({
      isLoading : false
      })
      }, 1500 )
  }

  functionSubmit = (e) =>{
   console.log("submitted")
    e.preventDefault();
    console.log('try');

    var data = this.state.data;
    var name = this.refs.name.value;
    var address = this.refs.address.value;

    if(this.state.action === 0){
      var dataHold = {
        name, address
      }
      data.push(dataHold);
    }else{
      var index = this.state.index;
      data[index].name = name;
      data[index].address = address;
    }

    this.setState({
      data: data,
      act: 0
    });

    this.refs.curdForm.reset();
    this.refs.name.focus();
  }

  functionRemove = (i) => {
    var data = this.state.data;
    data.splice(i,1);
    this.setState({
      data: data
    });

    this.refs.curdForm.reset();
    this.refs.name.focus();
  }

  functionEdit = (i) => {
    var dataHold = this.state.data[i];
    this.refs.name.value = dataHold.name;
    this.refs.address.value = dataHold.address;

    this.setState({
      action: 1,
      index: i
    });

    this.refs.name.focus();
  }

  render() {
    var data = this.state.data;
    return (
      <div className="CRUD">
        <Conditional isLoading={this.state.isLoading} idFromAPI={this.state.idFromAPI}/>
        <h2>{this.state.title}</h2>
        <form ref="crudForm" className="crudForm">
          <input type="text" ref="name" placeholder="your Good name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={(e)=>this.functionSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {data.map((dataHold, i) =>
            <li key={i} className="myList">
              {i+1}. {dataHold.name}, {dataHold.address}
              <button onClick={()=>this.functionRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.functionEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    )
  }
}

export default CRUD