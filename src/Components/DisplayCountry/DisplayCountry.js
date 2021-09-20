import React from 'react';
import "./DIsplayCountry.css";

const DisplayCountry = (props) => {

    //ডিস্ট্রচারিং টোটাল ডাটা

    const {name,flag,capital,population,region} = props.all;
    return (
        <div className="countryes">
            <h2>This is: {name}</h2>
            <img src={flag} alt=""/>
            <p> Capital : { capital}</p>
            <p> Population : {population}</p>
            <small> Region :{ region }</small>
        </div>
    );
};

export default DisplayCountry;