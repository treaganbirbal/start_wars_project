import React from 'react';
import axios from 'axios';

class People extends React.Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
       this.getPeople()
    }

    getPeople = () => {
        axios.get('https://swapi.co/api/people')
        .then( response =>{
            console.log(response)
          this.setState({
            people: response.data.results
          })
        })
        .catch(err => {
          console.log(err)
        })
        }

    handleCharDisplay = (event) => {
        let splittedUrl = `https://swapi.co/api/people/${this.state.people}`.split('/').pop()
        console.log(splittedUrl)
        this.props.history.push(`https://swapi.co/api/people/${splittedUrl}`)
        }

    render(){
        const { people } = this.state;
        return(
            <>
               {
                   people.map(person =>{
                       return (
                           <li onClick={this.handleCharDisplay} key={person.name}><a href='#'> {person.name}</a></li>
                       )
                   })
               }
            </>
        )
    }
}

export default People