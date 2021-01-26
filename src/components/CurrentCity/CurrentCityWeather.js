import React from "react";
import styled from "styled-components";

import dayTimeBackground from "./assets/Yosemite 3.jpg";
import nightTimeBackground from "./assets/Yosemite.jpg";
import Location from "./CurrentLocation/Location";

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

const getBackground = () => {
  const currentTime = new Date().getHours();

  if (currentTime > 17) return <NightTime></NightTime>;

  return <DayTime></DayTime>;
};

export default function CurrentCityWeather(props) {
  // return <div>{getBackground()}</div>;
  return (
    <Wrapper>
      {getBackground()}
      <Location api={props.api}></Location>
    </Wrapper>
  );
}
