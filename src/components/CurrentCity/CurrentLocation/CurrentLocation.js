import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
`;

const City = styled.h1`
  color: white;
  border-bottom: 2px white solid;
  padding: 10px;
`;

export default function CurrentLocation(props) {
  if (props.cityName === undefined) return null;
  return (
    <Wrapper>
      <City>{props.cityName}</City>
    </Wrapper>
  );
}
