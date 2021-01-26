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
  //   const { latitude, setLatitude } = useState(0);
  //   const { longitude, setLongitude } = useState(0);
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [city, setCity] = useState("");

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
    console.log("++++++++++++");
    console.log(coordinates);
  };

  useEffect(() => {
    getCurrentLocation();

    const getWeather = async () => {
      console.log(coordinates);

      const api_call = await fetch(
        `${props.api.base}weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${props.api.key}`
      );

      const response = await api_call.json();
      console.log(response);
      console.log("==========");

      setCity(response.name);
    };
    getWeather();
  }, [coordinates.lat]);

  return (
    <Wrapper>
      {/* <Letter>Melbourne</Letter> */}
      {/* <Letter>{console.log(getCurrentLocation())}</Letter> */}
      <Letter>{city}</Letter>
    </Wrapper>
  );
}
