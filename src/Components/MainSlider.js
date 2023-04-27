import React from 'react';
import MovieCard from './MovieCard';

function MainSlider() {
  return (
    <section id="main-slider">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <MovieCard src="photos/gatodebotas.jpg" alt="Poster" year="2022" title="Gato de Botas 2" category="Animation" rating="7.9" />
          <MovieCard src="photos/abaleia.jpeg" alt="Poster" year="2022" title="A Baleia" category="Drama" rating="7.8" />
           <MovieCard src="photos/creed3.jpg" alt="Poster" year="2022" title="creed 3" category="Action" rating="7.7" />
           <MovieCard src="photos/homemformiga.jpg" alt="Poster" year="2022" title="Homem-Formiga e a Vespa: Quantumania" category="Action" rating="7.6" />
           <MovieCard src="photos/avatar2" alt="Poster" year="2022" title="Avatar: O Caminho da Água" category="Action" rating="7.6" />
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
