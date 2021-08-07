import logo from './logo.svg';
import './App.css';

const Signature = (props) => {
  return (
    <div>
      <p> created by {props.name} </p>
    </div>
  )
}

function App() {
  const now = new Date()
  const fullName = "Jacob Phillips"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>it is currently {now.toString()}</p>
        <br></br>
        <Signature name={fullName}/>
      </header>
    </div>
  );
}

export default App;
