import React, { useState } from "react";
import styled from "styled-components";
import CurrentCityWeather from "./CurrentCity/CurrentCityWeather";
import MoreWeathers from "./MoreWeathers/MoreWeathers";

const Wrapper = styled.div`
  margin: 100px auto;
  width: 800px;
  height: 600px;
  background-color: #fffaf0;
  overflow: hidden;
  border: 5px solid rgba(150, 150, 150, 0.6);
  border-radius: 25px;
`;
export default function Weathers(props) {
  const [coords, setCoords] = useState({ lat: null, lon: null });

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  return (
    <Wrapper>
      <CurrentCityWeather coordinates={coords} api={props.api}>
        {getCurrentLocation()}
      </CurrentCityWeather>
      <MoreWeathers coordinates={coords} api={props.api}></MoreWeathers>
    </Wrapper>
  );
}
