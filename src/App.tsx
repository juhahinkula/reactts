import './App.css';
import Hello from './Hello';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Hello name="Juha" age={20} />
      <Form />      
    </div>
  );
}

export default App;
