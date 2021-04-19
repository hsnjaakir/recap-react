import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setHeroes(data))
  },[])

  // const heroes = [
  //   {name: 'Razzak', age: 60}, 
  //   {name: 'Alamgir', age: 50},
  //   {name:'Jasim', age: 56}, 
  //   {name:'Manna', age:34}
  // ];
  return (
    <div className="App">
      <MovieCount></MovieCount>
      {
        heroes.map(hero => <Hero name={hero.name} key={hero.id} place={hero.address.street}></Hero>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCount() {
  const [count,setCount] = useState(0);
  const countInc = () => setCount(count+1);
  return(
    <div>
      <button onClick={countInc}>Add movie</button>
      <h5>Count movie: {count}</h5>
      <MovieDisplay movie={count+1}></MovieDisplay>
      <MovieDisplay movie={count+2}></MovieDisplay>
      <MovieDisplay movie={count+3}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies I have acted:{props.movie} </h4>
}

function Hero (props) {
  const heroStyle = {
    border:'2px solid purple',
    margin:'10px'
  }
  // console.log(props)
  return (
    <div style={heroStyle}>
      <h1> Hey! It's {props.name}</h1>
      <h5>I live in {props.place || 'Uganda'}</h5>
    </div>
  )
}
export default App;
