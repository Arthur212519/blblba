import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="swiper-slide">
      <div className="main-slider-box">
        <a href="#" className="main-slider-overlay">
          <i className="fas fa-play"></i>
        </a>
        <div className="main-slider-img">
          <img src={movie.poster} alt="Poster" />
        </div>
        <div className="main-slider-text">
          <span className="quality">Full HD</span>
          <div className="botton-text">
            <div className="movie-name">
              <span>{movie.year}</span>
              <strong>{movie.title}</strong>
            </div>
            <div className="category-rating">
              <div className="category">
                <a href="#">{movie.genre}</a>
              </div>
              <div className="rating">
                {movie.rating} <img src="photos/IMDb-icon.png" alt="imbd" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

