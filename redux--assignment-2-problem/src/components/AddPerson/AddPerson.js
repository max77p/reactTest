import React, { Component } from "react";

import "./AddPerson.css";

class addPerson extends Component {
    state={
        name:'',
        age:""
    }
nameChanged=event=>{
    this.setState({name:event.target.value});
}
ageChanged=event=>{
    this.setState({age:event.target.value});
}
  render() {
    return (
      <div className="AddPerson">
        <input type="text" placeholder="Name" onChange={this.nameChanged}
        value={this.state.name}/>
        <input type="number" placeholder="Age" onChange={this.ageChanged}
        value={this.state.age} />
        <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default addPerson;