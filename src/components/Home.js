import React from 'react'
import axios from 'axios';

class Home extends React.Component {
  constructor(){
    super()
      this.state = {
        info: []
      }
}

    componentDidMount(){
      axios.get('http://swapi.co/api/planets')
      .then()

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
