import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  ${"" /* width: 100%; */}
`;

const TempWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 20%;
  margin-top: -20px;
`;

const Temperature = styled.h1`
  background-color: rgba(150, 150, 150, 0.6);
  font-size: 70px;
`;

const Cloud = styled.div`
  text-align: end;
  margin-top: -50px;
`;

const WindWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
`;

const WindSpan = styled.span`
  display: block;
  float: left;
  text-align: center;
`;

const HumiditySpan = styled(WindSpan)`
  border-right: 2px white solid;
`;
const WindBlock = styled.div`
  margin: 20px;
`;

export default function Weather(props) {
  console.log(props.clouds);

  return (
    <Wrapper>
      <TempWrapper>
        <Temperature>{Math.round(props.temperature) + " ° "}</Temperature>
        <Cloud>{props.clouds}</Cloud>
      </TempWrapper>
      <WindWrapper>
        <HumiditySpan>
          <WindBlock>{"HUMIDITY"}</WindBlock>
          <WindBlock>{props.humidity + " %"}</WindBlock>
        </HumiditySpan>
        <WindSpan>
          <WindBlock>{"WIND"}</WindBlock>
          <WindBlock>{props.wind + " K/M"}</WindBlock>
        </WindSpan>
      </WindWrapper>
    </Wrapper>
  );
}
