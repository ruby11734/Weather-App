import React from "react";
import CurrentCityWeather from "./components/CurrentCity/CurrentCityWeather";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 100px auto;
  width: 800px;
  height: 600px;
  ${"" /* background-color: burlywood; */}
  overflow: hidden;
  border: 1px solid black;
  border-radius: 5px;
`;

const api = {
  key: "b091783d6e0f7a19cde9004ff5adc247",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  // const api_call = await fetch(`${base}+weather?lat=${getCurrentLocation().lat}&lon=${
  //       getCurrentLocation().lon
  //     }&appid=${props.api.key}`);
  return (
    <Wrapper>
      <CurrentCityWeather api={api} />
    </Wrapper>
  );
};

export default App;
