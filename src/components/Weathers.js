import React from "react";
import styled from "styled-components";
import CurrentCityWeather from "./CurrentCity/CurrentCityWeather";
import OtherCitiesWeather from "./OtherCities/OtherCitiesWeather";

const Wrapper = styled.div`
  margin: 100px auto;
  width: 800px;
  height: 600px;
  ${"" /* background-color: burlywood; */}
  ${"" /* overflow: hidden; */}
  border: 1px solid black;
  border-radius: 5px;
`;
export default function Weathers(props) {
  return (
    <Wrapper>
      <CurrentCityWeather api={props.api}></CurrentCityWeather>
      <OtherCitiesWeather api={props.api}></OtherCitiesWeather>
    </Wrapper>
  );
}
