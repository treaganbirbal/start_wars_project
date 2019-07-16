import React from 'react'
import axios from 'axios'

class Films extends React.Component{
  constructor(){
    super()
      this.state = {
        films: [],
        selectedMovie: null,
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
    })
    .catch(err => {
      console.log(err)
    })
}

handleChange = (event) => {
  this.setState({
    selectedMovie: event.target.value
  })
}

render(){
  return (
    <>
      <h1>Films</h1>
      <select onChange={this.handleChange}>
        <option selected='true' disabled='true'>Movies</option>
        {
          this.state.films.map(film => {
          return (
            <option>{film.title}</option>)
        })
      }
      </select>
    </>
  )
}
}

export default Films
