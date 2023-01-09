import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import useProfile from "./hooks/useProfile";


function App() {

    const {profile}=useProfile()


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/home"} element={<HomePage></HomePage>}></Route>
          <Route path={"/"} element={<LoginPage />}></Route>
          {/*<Route path={"/profile"} element={<ProfilePage  user={profile}/>}></Route>*/}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
