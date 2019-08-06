import React from 'react'

function SingleFilm(props){
  // debugger;
  return (
    <div>
      <p>Episode: {props.film.episode_id}</p> 
      <h1>{props.film.title}</h1>
      <p>{props.film.release_date}</p>
      <p>{props.film.opening_crawl}</p>
    </div>
  )
}

export default SingleFilm;
