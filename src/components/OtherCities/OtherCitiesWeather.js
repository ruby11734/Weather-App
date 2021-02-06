import React, { useEffect } from "react";
import styled from "styled-components";
import CityList from "./CityList/CityList";

const Wrapper = styled.div`
  background-color: burlywood;
`;
export default function OtherCitiesWeather(props) {
  return (
    <Wrapper>
      <CityList api={props.api}></CityList>
    </Wrapper>
  );
}
