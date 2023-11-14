import React, { useEffect } from "react";
import "./App.css";
import { AppRoutes } from "./routes/routes";
import { createGlobalStyle } from "styled-components";
import { getAds } from "./api.js";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
   box-sizing: border-box;
}

ul li {
  list-style: none;
}

html,
body {
  
  width: 100%;
  height: 100%;
  font-family: 'RobotoRegular', sans-serif;
  color: #000000;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), url(./fonts/StratosSkyeng.woff) format(truetype);
  font-weight: 400;
}

@font-face {
  font-family: "RobotoRegular";
  src: local("RobotoRegular"), url(./fonts/Roboto-Regular.ttf) format(truetype);
  font-weight: 400;
}

@font-face {
  font-family: "RobotoMedium";
  src: local("RobotoMedium"), url(./fonts/Roboto-Medium.ttf) format(truetype);
  font-weight: 500;
}


}`;

function App() {
  // useEffect(() => {
  //   getAds().then((ads) => {
  //     console.log(ads);
  //   });
  // }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
