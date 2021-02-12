import React, { useState, useEffect } from "react";
import styled from "styled-components";

import dayTimeBackground from "./assets/Yosemite 3.jpg";
import nightTimeBackground from "./assets/Yosemite.jpg";
import CurrentLocation from "./CurrentLocation/CurrentLocation";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
//===== styled-component ===========
const Wrapper = styled.div`
  height: 300px;
  position: relative;
  background: url(${(props) =>
      new Date().getHours() >= props.sunrise &&
      new Date().getHours() < props.sunset
        ? dayTimeBackground
        : nightTimeBackground})
    no-repeat;

  background-size: 100% 100%;
`;

const Mask = styled.div`
  height: 300px;
  position: relative;
  background-color: rgba(150, 150, 150, 0.4);
`;
//===============================

export default function CurrentCityWeather(props) {
  const [data, setData] = useState({
    cityName: "",
    temperature: null,
    humidity: null,
    wind: null,
    sunrise: null,
    sunset: null,
    clouds: null,
  });

  useEffect(() => {
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;

    if (latitude !== null) {
      const getWeather = async () => {
        const api_call = await fetch(
          `${props.api.base}weather?lat=${latitude}&lon=${longitude}&appid=${props.api.key}&units=metric`
        );

        const response = await api_call.json();
        // console.log(response);
        setData({
          cityName: response.name,
          temperature: response.main.temp,
          humidity: response.main.humidity,
          wind: response.wind.speed,
          sunrise: new Date(response.sys.sunrise * 1000).getHours(),
          sunset: new Date(response.sys.sunset * 1000).getHours(),
          clouds: response.weather[0].main,
        });
      };
      getWeather();
    }
  }, [props.coordinates.lat]);

  return (
    <Wrapper sunset={data.sunset} sunrise={data.sunrise}>
      {data.cityName === "" ? null : (
        <Mask>
          <CurrentLocation cityName={data.cityName}></CurrentLocation>
          <CurrentWeather
            temperature={data.temperature}
            clouds={data.clouds}
            humidity={data.humidity}
            wind={data.wind}
          ></CurrentWeather>
        </Mask>
      )}
    </Wrapper>
  );
}
