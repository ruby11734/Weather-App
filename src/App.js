import React from "react";
import Weathers from "./components/Weathers";

const api = {
  key: "Your API Key",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  return <Weathers api={api}></Weathers>;
};

export default App;
