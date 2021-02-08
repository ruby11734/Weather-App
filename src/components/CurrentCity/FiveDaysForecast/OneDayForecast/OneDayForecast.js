import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Icon = styled.img`
  src: ${(props) => props.src};
`;

const Item = styled.span`
  margin: 10px auto;
`;

const Temperature = styled(Item)`
  color: rgba(150, 150, 150, 0.9);
`;

export default function OneDayForecast(props) {
  const [data, setData] = useState({
    date: null,
    temperature: null,
    icon: null,
  });

  const DAYPERWEEK = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

  const url = props.api.base;

  useEffect(() => {
    const currentDayWeather = props.weather;
    if (props.weather != null) {
      const getWeather = async () => {
        const iconApi = await fetch(
          `http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`
        );

        setData({
          date: DAYPERWEEK[new Date(props.weather.dt_txt).getDay()],
          temperature: props.weather.main.temp,
          icon: iconApi.url,
        });
      };
      getWeather();
    }
  }, [props.weather]);

  return (
    <Wrapper>
      <Item>{data.date}</Item>
      <Item>
        <Icon src={data.icon}></Icon>
      </Item>
      <Item style={{ textAlign: "center" }}>
        {" "}
        {Math.round(data.temperature) + " ° "}
      </Item>
    </Wrapper>
  );
}
