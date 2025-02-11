import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";
import AppConfig from "../../config/config.json";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie_card">
      <img
        src={AppConfig.tmdbImagePath + movie.poster_path}
        alt="movie poster"
        className="movie_post"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average.toFixed(2)}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
