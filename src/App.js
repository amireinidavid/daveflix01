import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import MoviesPage from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import Watchpage from "./Screens/Watchpage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavouriteMovies from "./Screens/Dashboard/FavouriteMovies";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Movielist from "./Screens/Dashboard/Admin/Movielist";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Addmovies from "./Screens/Dashboard/Admin/Addmovies";
import Users from "./Screens/Dashboard/Admin/Users";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./Context/DrawerContext";
import Test from "./Screens/Test";
import { useState, CSSProperties, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Preloader from "./components/Preloaders";

function App() {
  Aos.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<Watchpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favourite" element={<FavouriteMovies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movielist" element={<Movielist />} />
          <Route path="/addmovie" element={<Addmovies />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
