import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/api/home"} element={<HomePage></HomePage>}></Route>
          <Route path={"/api/login"} element={<LoginPage />}></Route>
          <Route path={"/api/profile"} element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
