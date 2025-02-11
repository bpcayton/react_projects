import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import SingleMovie from "./components/MovieList/SingleMovie";

const AllRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/top_rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={Star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
      />
      <Route path="/movie/:movieId" element={<SingleMovie />} />
    </Routes>
  );
};

export default AllRouting;
