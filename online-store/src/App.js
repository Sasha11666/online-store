import React, { useEffect, createContext, useContext, useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes/routes";
import { createGlobalStyle } from "styled-components";
import { getAds } from "./api.js";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentAds } from "./store/currentAds";

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

a {
  text-decoration: none;
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

export const UserContext = createContext("");

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};

function App() {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.currentAds.value);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    getAds().then((ads) => {
      dispatch(setCurrentAds(ads));
    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user: user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
