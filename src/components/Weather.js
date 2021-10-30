import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
  
  // [ Useful Variables ]
  const APIKEY = process.env.REACT_APP_KEY;
  const [ weather, setWeather ] = useState([]);
  let [ time, setTime ] = useState('');
  const [ form, setForm ] = useState({
    city: ""
  });

  // [ Time Function ]
  function tick() {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(tick, 1000);
  
  // [ Weather Function ]
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add Location");
    } else {
      localStorage.setItem('location',form.city);
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  // [ OnChange Varibles Set ]
  const handleChange = (e) => {
    let value = e.target.value;
    setForm({ ...form, city: value });
  };
  
  return (
    <span className="weather">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Location</Form.Label>
          <Form.Control type="text" placeholder="Search Location" name="city"  onChange={(e) => handleChange(e)}/>
          <Form.Text className="text-muted">
            Search Any Location & You'll Get Weather Information
          </Form.Text>
          <div>
          <Form.Text className="text-muted">
            Current Time: {time}
          </Form.Text>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => weatherData(e)}>
          Submit
        </Button>
      </Form>
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </span>
  );
}

export default Weather;
