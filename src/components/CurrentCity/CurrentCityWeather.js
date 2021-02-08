import React, { useState, useEffect } from "react";
import styled from "styled-components";

import dayTimeBackground from "./assets/Yosemite 3.jpg";
import nightTimeBackground from "./assets/Yosemite.jpg";
import Location from "./CurrentLocation/Location";
import Weather from "./CurrentWeather/Weather";
//===== styled-component ===========
const Wrapper = styled.div`
  height: 300px;
  position: relative;
`;

const DayTime = styled(Wrapper)`
  background: url(${dayTimeBackground}) no-repeat;
  background-size: 100% 100%;
`;

const NightTime = styled(Wrapper)`
  background: url(${nightTimeBackground}) no-repeat;
  background-size: 100% 100%;
`;

//===============================

const getBackground = (sunset) => {
  const currentTime = new Date().getHours();

  if (currentTime >= sunset) return <NightTime></NightTime>;

  return <DayTime></DayTime>;
};

export default function CurrentCityWeather(props) {
  const [data, setData] = useState({
    cityName: "",
    temperature: null,
    humidity: null,
    wind: null,
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
          sunset: new Date(response.sys.sunset * 1000).getHours(),
          clouds: response.weather[0].main,
        });
      };
      getWeather();
    }
  }, [props.coordinates.lat]);

  const getCurrentWeather = () => {
    if (data.cityName !== "")
      return (
        <div>
          {getBackground(data.sunset)}
          <Location cityName={data.cityName}></Location>
          <Weather
            temperature={data.temperature}
            clouds={data.clouds}
            humidity={data.humidity}
            wind={data.wind}
          ></Weather>
        </div>
      );
    return null;
  };

  return <Wrapper>{getCurrentWeather()}</Wrapper>;
}
