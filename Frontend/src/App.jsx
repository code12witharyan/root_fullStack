import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [count, setCount] = useState(0);
  const [countries, setcountries]= useState([])

  useEffect( ()=>{
    axios.get('/api/countries')
    .then((response)=>{
      setcountries(response.data)
    })
    .catch((error)=>{ 
      console.log(error)
    })
  },[]
  );



          
  // useEffect(() => {
  //   console.log("I run on mount (first render)!");
  // }, []); // empty dependency array

  return (
    <div>
      <h1>Welcome to the world of React</h1>
      <p>COUNTRIES: {countries.length}</p>
      {countries.map((country, i) => (
        <p key={i}>{country}</p>
      ))}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}



//   return (
//     <>
//      <h1> welcome to the world of React
//      </h1>
//      <p>COUNTRIES: {countries.length}</p>
//      {
//       countries.map(Country=><p>{Country.name.common}</p>)
//      }
//     </>
//   )
// }

export default App
