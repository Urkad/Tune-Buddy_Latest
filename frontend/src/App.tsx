import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FriendPage from "./components/FriendPage";
import LoginPage from "./components/LoginPage";
import useUser from "./components/hooks/useUser";
import NavigationBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import EventApp from "./components/EventApp";
import EventDetails from "./components/Event/EventDetails";


function App() {

    const {user, setUpdatedUser, login, logout,register,} = useUser();

  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar logout={logout}/>
        <Routes>
            <Route path={"/login"} element={<LoginPage login={login} register={register}/>}></Route>
            <Route path={"/"} element={<LoginPage login={login} register={register}/>}></Route>

            <Route element={
                <ProtectedRoutes user={user}/>}>
                <Route path={"/home"} element={<FriendPage></FriendPage>}></Route>
          <Route path={"/profile"} element={<ProfilePage user={user} setUser={setUpdatedUser}/>}></Route>
          <Route path={"/event"} element={<EventApp />}></Route>
          <Route path={"/event/:id"} element={<EventDetails/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
