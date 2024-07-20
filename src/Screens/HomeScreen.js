import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import TopRated from "../components/Home/TopRated";
import Promos from "../components/Home/Promos";
import ActionCat from "../components/Home/ActionCat";
import Animecategory from "../components/Home/Animecategory";
import DramaCat from "../components/Home/DramaCat";

function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6 ">
        <Banner />
        <PopularMovies />
        <ActionCat />
        <Promos />
        <Animecategory />
        <DramaCat />
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen;
