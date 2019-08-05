import React from 'react'
import axios from 'axios'

import SingleFilm from './SingleFilm.js'

class Films extends React.Component{
  constructor(){
    super()
      this.state = {
        films: [],
        selectedMovie: null,
        matched: false
      }
}
  componentDidMount(){
    this.getFilms()
  }


  getFilms = () => {
    axios.get('https://swapi.co/api/films')
    .then( response =>{
      this.setState({
        films: response.data.results
      })
      // debugger;
    })
    .catch(err => {
      console.log(err)
    })
}

handleChange = (event) => {
  this.setState({
    // matched: true,
    selectedMovie: event.target.value,
  })
  console.log(event.target.value)
}

render(){


  return (
    <>
      <h1>Films</h1>
      <select onChange={this.handleChange}>
        <option selected={true} disabled={true}>Movies</option>
        {
          this.state.films.map(film => {
          return (
            <>
            <option key={film.id} value={film.title}>{film.title}</option>
            </>
            )
        })
        }
      </select>
      {
        this.state.films.map(film => {
          return this.state.selectedMovie === film.title ?
          <ul key={film.id}>
            <SingleFilm film={film} />
          </ul> :
          null;
        }) 
      }
    
    </>
  )
}
}

export default Films
