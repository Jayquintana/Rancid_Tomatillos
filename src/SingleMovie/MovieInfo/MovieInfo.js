import React from  'react'
import './MovieInfo.css'




const MovieInfo = ({ title, poster, avgRating, overview, backdrop, release, genres, budget, revenue, runtim, tagline }) => {

  return (
    <article className="single-movie">
      <img className="movie-poster" src={poster} width={300} height={400} alt={`title showing in theaters`}/>
      <div className='movie-specs'>
        <h3 className='single-movie-title'> {title}</h3>
        <h3 className='single-movie-overview'>{overview}</h3>
        <h3 className='single-movie-release'>Released on: {release}</h3>
        <h3 className='single-movie-genres'>Genres: {genres}</h3>
        <h3 className='single-movie-budget'>A budget of ${budget}</h3>
        <h3 className='single-movie-revenue'>A revenue of ${revenue}</h3>
        <h3 className='single-movie-rating'> Rating: {avgRating}</h3>
      </div>

    


    </article>
  )
}
export default MovieInfo;