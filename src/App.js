import logo from './logo.svg';
import './App.css';

function App() {
const personDetails = {
  fName: 'Shakil',
  LName: 'Khan'
}
var myStyle = {
  color:'red',
  padding: '10px',
  border: '1px solid red',
  backgroundColor: 'yellow',
  borderRadius: '15px'
}

  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <MyComponent Name="Shakil Khan" Fname="Khan"></MyComponent>  {/* call component */}
        <MyComponent Name="Shakib Khan" Fname="Khan"></MyComponent>
        <MyComponent Name="Azad Khan" Fname="Molla"></MyComponent>
        <MyComponent Name="Azad Khan" Fname="Khan"></MyComponent>
      </header>
    </div>
  );
}

//component creat
function MyComponent(props) { //should write first latter uppercase
  var Shakil= {
    color: 'salmon'
  }
  return (
    <div style={Shakil}>
      <h1> Name: {props.Name} </h1>
      <h3> FName: {props.Fname}</h3>
    </div>
  )
}


export default App;
