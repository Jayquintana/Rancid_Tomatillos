import React from 'react'
import './MovieContainer.css'
import Movie from './Movie/Movie'
import { Route, NavLink } from 'react-router-dom';

const MovieContainer = ({movies, singleMovie}) => {
  
    const movieCards = movies.map(movie => {
      return (
      <Movie 
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        avgRating={movie.average_rating}
        id={movie.id}
        />

      )
    })
  return (
    <main>
      
      <h1 className="Category-title">Upcoming Movies</h1>
      <section className='movies-section'>
        {movies && movieCards}
      </section>
    </main>
  )
}

export default MovieContainer