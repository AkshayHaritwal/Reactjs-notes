import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let[city , setCity]= useState("");
  let [error , setError ]= useState(false);
    const API_URL = "https:/api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2fb619a0b7f69f8d5453f2a2758954ad"


    let getWeatherInfo = async()=>{
      try {
        
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city :city,
        temp: jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity :jsonResponse.main.humidity,
        feelslike : jsonResponse.main.feels_like ,
        weather : jsonResponse.weather[0].description ,
      }
      console.log(result);
      return result;
      } 
      catch (error) {
        throw error;
      }
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
      try {
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);

      } catch (error) {
        setError(true)        
      }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
    <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists</p>}
      </form>
    </div>
  );
}
