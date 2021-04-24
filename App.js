import React, { useEffect, useState } from 'react';
const Weather = () =>{
    const[search, setSearch] = useState("mumbai")
    const[city, setCity] = useState(null)

    const week = [
        "Sunday", "monday", "Tuesday", "wednesday", "Thursday" , "Friday", "Saturday"
    ];
    const month = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];    
    var d = new Date()
    console.log()
    useEffect(()=>{
        const fetchAPI = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b931afb408488efc70fa47ab8a653bee`
            const response = await fetch(url)
            const resJSON = await response.json()
            setCity(resJSON)
        };
        fetchAPI()
    },[search]);

    const temp = () =>{
        const x = city.main["temp"]
        const xx = x - 273.15
        return xx
    };
return(
<>
 <input
 className = "search-box"
 type = "text"
 placeholder = "Enter the name of the City...."
 onChange ={ (e) =>{ setSearch(e.target.value)
}}>
 </input>


{(!city) ? 
(<p> No data Found </p>) :
(
<div 
className = "container">
    <h2>{city.name}</h2>
    <h3> {temp()} Celcius </h3>
    <h3>{week[d.getDay()]}, {d.getDate()}, {month[d.getMonth()]}, {d.getFullYear()}  </h3>
</div>
)};


</>

)}


export default Weather;