
import './App.css';
import Countires from './Components/Countries/Countires';


function App() {
  return (
    <div className="App">
     <Countires></Countires>
      {/* <Countries></Countries> */}
        
    </div>
  );
}
// function Countries() {
//   const [country, setCountries] = useState([]);
  
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//     .then(data=>setCountries(data))
//   }, [])
   
//   return (
//     <div>
//       <h2> Traveling around the WORLD !! </h2>
//       <h4> Countries Available : {country.length}</h4>
//       {
//         country.map(countryes=> <Country name= {countryes.name} city = {countryes.capital}  ></Country>)
//       }

//    </div>
//  )

//  }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>City: {props.city}</p>
//     </div>
//   )

// }



export default App;
