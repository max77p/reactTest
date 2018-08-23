import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {//extends means to inherit from component
  state={
    persons: [
      {
        id:'dfafds',name:'Max',age:28
      },
      {
        id:'adfsa',name:'Ma',age:20
      },
      {
        id:'adfsv',name:'M',age:2
      }
     
    ],
    otherState:'some other value' ,
    showPersons:false
  } //state managed from inside a component



  nameChangedHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    console.log(personIndex);
    const person={
     ...this.state.persons[personIndex]// spread operator distributes all the props in this object
    }
    console.log(persons);

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({ persons:persons});
  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

togglePerson=()=>{
const doesShow=this.state.showPersons;
this.setState({showPersons: !doesShow})
}


  render() {
    const style={
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
    
    };

    let persons=null;

    if(this.state.showPersons){
        persons = (
                  <div>
                    {this.state.persons.map((person,index)=>{
                      return <Person 
                      click={()=>this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event)=>this.nameChangedHandler(event,person.id)}/>
                    })}
              </div>
        );

        style.backgroundColor='red';
       
    }
    let classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');//classes is red
    }
    if (this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
    

   <div className="App">
       <h1>Hi, Im a react dev</h1>
       <p className={classes.join(' ')}>another heading</p>
       <button  style={style}
       onClick={this.togglePerson}>swtich Name</button>
      {persons}
      </div>
        
    );
  }
}

export default App;
