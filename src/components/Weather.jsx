import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { City, Temp, WeatherContainer } from "./WeatherStyles";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=imperial&appid=75e6f3ac0cf129d8d35cdfccdc028f7a";

export default function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176; </Temp>
      <City>
        {data.name}, {data.sys.country}
      </City>
    </WeatherContainer>
  );
}
