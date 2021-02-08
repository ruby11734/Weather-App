import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
`;

const TempWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 18%;
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
  left: 5%;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  padding: 10px;
`;

const Content = styled.div`
  height: 30px;
  text-align: center;
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
        <Item>
          <Content>{"HUMIDITY"}</Content>
          <Content>{props.humidity + " %"}</Content>
        </Item>
        <Item style={{ borderLeft: "2px solid white" }}>
          <Content>{"WIND"}</Content>
          <Content>{props.wind + " K/M"}</Content>
        </Item>
      </WindWrapper>
    </Wrapper>
  );
}
