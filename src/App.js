import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: 'asdf', name: 'Davey', age: 29 },
      { id: 'qwer', name: 'Phoebe', age: 29 },
      { id: 'zxcv', name: 'Sanka', age: 1 }
    ],
    showPeeps: false
  }


// using conditional rendering
  togglePeopleHandler = () => {
    const togglePeeps = this.state.showPeeps
    this.setState( {
      showPeeps: !togglePeeps
    } );
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({
      people: people
    });
  }

  changePersonNameHanlder = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id
    })

    const person = {...this.state.people[personIndex]}

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person

    this.setState({
      people: people
    })

  }

  render() {

    let people = null;

    let assignedClasses = [];
    if(this.state.people.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.people.length <= 1){
      assignedClasses.push(classes.bold);
    }

    if ( this.state.showPeeps ) {
      people = (
        <div>
          <p className={assignedClasses.join(' ')}>Peeps count is low bro checkout the flow!</p>
          { this.state.people.map( (person, index) => {
            return <Person
              click={ this.deletePersonHandler.bind(this, index) }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ (event) => { this.changePersonNameHanlder(event, person.id) } }
              />
          })}
        </div>
      )


    }

    return (
      <div className={ classes.App }>
        <h1>My first React App</h1>
        <button onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
  }
}

export default App;
