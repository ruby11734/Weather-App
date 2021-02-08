import React from "react";
import styled from "styled-components";
import City from "./City/City";

const Wrapper = styled.div`
  width: 40%;
  margin: 20px 0;
`;

const Title = styled.h2`
  margin-left: 20px;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;
export default function OtherCities(props) {
  const cityName = ["Sydney", "Brisbane", "Perth"];
  return (
    <Wrapper>
      <Title>{"Other Cities"}</Title>
      <List>
        {cityName.map((row, index) => (
          <City key={index} api={props.api} cityName={row}></City>
        ))}
      </List>
    </Wrapper>
  );
}
