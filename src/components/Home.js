import React from 'react'
import axios from 'axios';
import Films from './Films.js'

class Home extends React.Component {
  constructor(){
    super()
      this.state = {
        films: [],
        people: [],
        planets: [],
        species: [],
        vehicles: []
      }
}

    componentDidMount(){
      // this.getFilms();
      // this.getPeople();
      this.getPlanets();
      this.getSpecies();
      this.getVehicles();
}



getPlanets = () => {
axios.get('https://swapi.co/api/planets')
.then( response =>{
this.setState({
  planets: response.data.result
})
})
.catch(err => {
console.log(err)
})
}

getSpecies = () => {
axios.get('https://swapi.co/api/species')
.then( response =>{
this.setState({
  species: response.data.result
})
})
.catch(err => {
console.log(err)
})
}

getVehicles = () => {
axios.get('https://swapi.co/api/vehicles')
.then( response =>{
this.setState({
  vehicles: response.data.result
})
})
.catch(err => {
console.log(err)
})
}



    render(){
      return(
        <>
        <img src="https://wallpaperplay.com/walls/full/2/9/2/124128.jpg" id='banner-img' alt=""/>
        <h1 className='welcome'>Welcome to Star Wars Fan Page</h1>
        </>
      )
    }
}

export default Home;
