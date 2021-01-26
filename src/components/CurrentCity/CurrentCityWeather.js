import React, { useState, useEffect } from "react";
import styled from "styled-components";

import dayTimeBackground from "./assets/Yosemite 3.jpg";
import nightTimeBackground from "./assets/Yosemite.jpg";
import Location from "./CurrentLocation/Location";
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
  console.log(sunset);

  if (currentTime > sunset) return <NightTime></NightTime>;

  return <DayTime></DayTime>;
};

export default function CurrentCityWeather(props) {
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [city, setCity] = useState("");
  const [sunset, setSunset] = useState(0);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    getCurrentLocation();

    const getWeather = async () => {
      const api_call = await fetch(
        `${props.api.base}weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${props.api.key}`
      );

      const response = await api_call.json();
      setSunset(new Date(response.sys.sunset * 1000).getHours());
      setCity(response.name);
    };
    getWeather();
  }, [coordinates.lat]);

  return (
    <Wrapper>
      {getBackground(sunset)}
      <Location cityName={city}></Location>
    </Wrapper>
  );
}
