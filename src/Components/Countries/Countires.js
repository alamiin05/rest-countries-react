import React, { useEffect, useState } from 'react';

import DisplayCountry from '../DisplayCountry/DisplayCountry';
import"./Countries.css"

const Countires = () => {

    const [countires, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
        .then(data=>setCountries(data))
    },[])
    

    return (
        <div >
            <h1> Hello From Countiries: {countires.length}</h1>
            <div className ="countries-container" >
            {
                    countires.map(country => <DisplayCountry
                    key={country.name}
                    all = {country}
                  /*   name={country.name}
                    capital={country.capital}
                    population={country.population} */>
                </DisplayCountry>)
          }
            </div>
           
        </div>
    );
};

export default Countires;