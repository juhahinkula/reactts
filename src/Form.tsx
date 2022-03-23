import React, { useState } from 'react';
import { Person } from './interfaces';

function Form() {
  const [person, setPerson] = useState<Person>({} as Person);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({...person, [event.target.id]: event.target.value});
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return(
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label><br/>
        <input type="text" id="name" value={person.name} onChange={inputChanged} /><br/>
        <label htmlFor="name">Age</label><br/>
        <input type="text" id="age" value={person.age} onChange={inputChanged} /><br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form;