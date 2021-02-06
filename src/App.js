import React from "react";
import Weathers from "./components/Weathers";

const api = {
  key: "b091783d6e0f7a19cde9004ff5adc247",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  // const api_call = await fetch(`${base}+weather?lat=${getCurrentLocation().lat}&lon=${
  //       getCurrentLocation().lon
  //     }&appid=${props.api.key}`);
  return <Weathers api={api}></Weathers>;
};

export default App;
