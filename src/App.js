import React from "react";
import { Route, Routes } from "react-router-dom";
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
import AnimationCat from "./components/CategoriesSwitch/AnimationCat";
import DramaCat from "./components/Home/DramaCat";
import Actioncategory from "./components/CategoriesSwitch/Actioncategory";

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
          <Route path="/anime" element={<AnimationCat />} />
          <Route path="/drama" element={<DramaCat />} />
          <Route path="/action" element={<Actioncategory />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
