import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.img`
  src: ${(props) => props.src};
`;

const Item = styled.span`
  margin: auto 10px;
  width: 70px;
`;

export default function City(props) {
  const [data, setData] = useState({
    temperature: null,
    icon: null,
  });

  const url = props.api.base;

  useEffect(() => {
    const getWeather = async () => {
      const api_call = await fetch(
        `${url}weather?q=${props.city}&appid=${props.api.key}&units=metric`
      );

      const response = await api_call.json();
      const iconApi = await fetch(
        `http://openweathermap.org/img/w/${response.weather[0].icon}.png`
      );

      setData({
        temperature: response.main.temp,
        icon: iconApi.url,
      });
    };
    getWeather();
  }, [url]);

  return data.temperature === null ? null : (
    <Wrapper>
      <Item>{props.city}</Item>
      <Item style={{ textAlign: "center" }}>
        {Math.round(data.temperature) + " ° "}
      </Item>
      <Item>
        <Icon src={data.icon}></Icon>
      </Item>
    </Wrapper>
  );
}
