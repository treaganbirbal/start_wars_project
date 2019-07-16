import React from 'react'
import axios from 'axios';

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
      axios.get('https://swapi.co/api/films')
      .then( response =>{
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })


    axios.get('https://swapi.co/api/people')
    .then( response =>{
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })


  axios.get('https://swapi.co/api/planets')
  .then( response =>{
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })

axios.get('https://swapi.co/api/species')
.then( response =>{
  console.log(response)
})
.catch(err => {
  console.log(err)
})


axios.get('https://swapi.co/api/vehicles')
.then( response =>{
  console.log(response)
})
.catch(err => {
  console.log(err)
})
}



    render(){
      return(
        <>
        Home
        </>
      )
    }
}

export default Home;
