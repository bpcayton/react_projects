import React from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";

const MovieList = () => {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" />
        </h2>
      </header>
    </section>
  );
};

export default MovieList;
