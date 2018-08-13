import React from 'react';
import './Person.css';

const person = (props) => {

  return (
    <div className='Person'>
      <p onClick={props.click}>Hello! my name is { props.name } and I am { props.age } years olddddd.</p>
      <p>{ props.children }</p>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  )
};

export default person;
