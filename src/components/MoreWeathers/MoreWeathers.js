import React, { useEffect } from "react";
import styled from "styled-components";
import FiveDaysForecast from "../CurrentCity/FiveDaysForecast/FiveDaysForecast";
import OtherCities from "./OtherCities/OtherCities";

const Wrapper = styled.div`
  background-color: #fffaf0;
  height: 300px;
  display: flex;
`;
export default function MoreWeathers(props) {
  return (
    <Wrapper>
      <OtherCities api={props.api}></OtherCities>
      <FiveDaysForecast
        coordinates={props.coordinates}
        api={props.api}
      ></FiveDaysForecast>
    </Wrapper>
  );
}
