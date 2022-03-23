import { Person } from './interfaces';

function Hello({name, age}: Person) {
  return(
    <div>
      Hello {name}
      { age && <>, you are {age} years old!</>}   
    </div>
  )
}

export default Hello;