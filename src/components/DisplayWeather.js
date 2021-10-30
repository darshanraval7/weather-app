import React, { useState } from "react";
import "./displayweather.css";
import { Card, Button, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function DisplayWeather(props) {
  
  // [ Useful Variables ]
  let { data } = props;
  let [ time, setTime ] = useState('');
  const APIKEY = process.env.REACT_APP_KEY;

  // [ Time Function ]
  function tick() {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(tick, 1000);
  
  
  // [ Weather Function ]
  async function weatherData(e) {
    e.preventDefault();
    let location = localStorage.getItem('location');
    const resData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((resData) => resData);
      data = resData;
  }
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <Card style={{ width: '27rem' }}>
            <Card.Body>
              <Card.Title>{data.name} , {data.sys.country}. Weather</Card.Title>
              <Card.Text>
                As of {time}
              </Card.Text>
              <h1>
                {" "}
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </h1>
              <Card.Text style={{borderTop: "1px solid black", marginTop: "5px"}}>
                {data.weather[0].main}
                <Container>
                  <Row>
                    High/Low: {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                  </Row>
                  <Row>
                    Humidity: {data.main.humidity} %
                  </Row>
                  <Row>
                    Pressure: {data.main.pressure} hPa
                  </Row>
                  <Row>
                    Visibility: {data.visibility / 1000} Km
                  </Row>
                </Container>
              </Card.Text>
              <Button variant="primary" onClick={(e) => weatherData(e)}>Refresh</Button>
            </Card.Body>
          </Card>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
