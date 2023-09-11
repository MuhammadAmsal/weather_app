import React,{useEffect,useState} from "react";
import "./css/style.css";

const Weatherapp = () => {
  const [city,setCity]= useState(null);
  const [search,setSearch]=useState("karachi");

  useEffect(()=>{

    const fetchApi= async()=>{
     
     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e6a16927264da473033d02caecc3e08d&units=metric`);
     const resJson= await response.json();
     console.log(resJson.main)
     setCity(resJson.main)
    }
    fetchApi()
  },[search])
  return (
    <>
       
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
                          setSearch(event.target.value)
            }}
          />
        </div>

        { !city ? (
            <p className="error" >NO DATA FOUND</p>
          ):(                                                                      
            <div>   <div className="info">
            <h2 className="location">
            <i class="fa-solid fa-sun moving-icon"></i>
              
              {search}
            </h2>
            <h1 className="temp text" >
                  {city.temp}°C
            </h1>
            <h3 className="tempmin_max text" >
               
               <div>  Feels-like: {city.feels_like}°C </div>  <br/> 
               <div>  Humidity: {city.humidity}% </div>  <br/> 
               <div>  Max-Temp: {city.temp_max}°C </div> <br/> 
               <div>  Min-Temp: {city.temp_min}°C </div>  
            </h3>
          </div>
          </div>
          )}

      
      </div>
     

    </>
  );
};
export default Weatherapp;
