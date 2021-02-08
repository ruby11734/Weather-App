import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OneDayForecast from "./OneDayForecast/OneDayForecast";

const Wrapper = styled.div`
  width: 60%;
  border-left: 2px solid rgba(150, 150, 150, 0.6);
  margin: 20px 0;
  padding: 0;
`;

const Title = styled.h2`
  margin-left: 20px;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export default function FiveDaysForecast(props) {
  const [data, setData] = useState([]);

  const url = props.api.base;

  useEffect(() => {
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;

    if (latitude !== null) {
      const getWeather = async () => {
        const api_call = await fetch(
          `${props.api.base}forecast?lat=${latitude}&lon=${longitude}&appid=${props.api.key}&units=metric`
        );

        const response = await api_call.json();

        setData(getWeeklyMiddleDayWeather(response.list));
      };
      getWeather();
    }
  }, [props.coordinates.lat]);

  const getWeeklyMiddleDayWeather = (response) => {
    let fiveDayWeather = [];

    response.map((row) => {
      if (new Date(row.dt_txt).getHours() === 12) {
        fiveDayWeather.push(row);
      }
    });
    return fiveDayWeather;
  };

  return (
    <Wrapper>
      <Title>{"Forecast"}</Title>
      <List>
        {data.length === 0
          ? null
          : data.map((row, index) => (
              <OneDayForecast
                key={index}
                weather={row}
                coordinates={props.coordinates}
                api={props.api}
              ></OneDayForecast>
            ))}
      </List>
    </Wrapper>
  );
}
