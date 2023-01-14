import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import useUser from "./hooks/useUser";
import NavigationBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";


function App() {

    const {username, login, logout} = useUser();


  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar logout={logout}/>
        <Routes>
          <Route path={"/home"} element={<HomePage></HomePage>}></Route>
          <Route path={"/"} element={<LoginPage login={login}/>}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
