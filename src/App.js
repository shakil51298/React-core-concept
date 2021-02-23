import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const products = [
  {name:'Laptop', price: '$500'},
  {name: 'Mobile', price:' $ 480'},
  {name: 'Charger', price:'$40'},
  {name: 'Clokc', price: '$70'}
]
const mYarrya = ['shakil','shakil','amar baba','rozina']
//const arrays = ['shakil','azad dsd','koly','rajib']; // from array
  return (
    <div className="App">
      <header className="App-header">
      <Count></Count>
      <DtnamicUser></DtnamicUser>

        {/* <MyComponent Name={arrays[0]} Fname="Khan"></MyComponent>  {/* call component */}
        {/* <MyComponent Name={arrays[1]} Fname="Khan"></MyComponent>
        <MyComponent Name="Azad Khan" Fname="Molla"></MyComponent>
        <MyComponent Name="Azad Khan" Fname="Khan"></MyComponent> } */}
      <ul>
        {
          mYarrya.map(ss => <li>{ss}</li>)
        }        
        
        {
          products.map(proName => <li>{proName.name}</li>)
        }
        
      </ul>

      <Products product={Products[0]}></Products>
      </header>
    </div>
  );
}
function Products(props) {

  return(
    <div >
      <h5></h5>
      <h3></h3>
      <button>Buy Now</button>
    </div>
  )
}
//  Count Funtion
function Count() {
  const [data,setData] = useState(0)
  const handleCount = () => setData(data + 1)
  const countDecrease = () => setData(data - 1)
  return(
    <div>
      <h1>Count: {data}</h1>
      <button onClick={handleCount}>Increase + </button>
      <button onClick={countDecrease}>Decrese - </button>
    </div>
  )
}
// //component creat
// function MyComponent(props) { //should write first latter uppercase
//   var Shakil= {
//     color: 'salmon'
//   }
//   return (
//     <div style={Shakil}>
//       <h1> Name: {props.Name} </h1>
//       <h3> FName: {props.Fname}</h3>
//     </div>
//   )
// }

function DtnamicUser() {
 
 const [userData, SetUserData] = useState([]);
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => SetUserData(data))
},[])
 
  return(
   <div>
     <h1>Dynamic User: {userData.length}</h1>
     <ol>
       {
         userData.map(user => <li>{user.name}</li>)
       }
     </ol>
   </div>
 ) 
}

export default App;
