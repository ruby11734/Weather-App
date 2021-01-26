import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 10%;
  top: 20%;
`;

const Letter = styled.h2`
  font-size: 30px;
  color: white;
`;

export default function Location(props) {
  return (
    <Wrapper>
      <Letter>{props.cityName}</Letter>
    </Wrapper>
  );
}
