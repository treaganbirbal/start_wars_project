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
        //   debugger;
        })
        .catch(err => {
          console.log(err)
        })
        }

    handleCharDisplay = (event) => {
        let splitted = `https://swapi.co/api/people/${this.state.people}`.split('/')
        let splittedUrl = splitted[5]
        console.log("spiited", splittedUrl)
        this.props.history.push(`https://swapi.co/api/people/${splittedUrl}`)
        }

    render(){
        const { people } = this.state;
        return(
            <>
               {
                   people.map(person =>{
                       return (
                           <>
                            <li onClick={this.handleCharDisplay} key={person.name}><a href='#'> {person.name}</a></li>
                            <a href={person.url}>{person.url} </a> 
                           </>
                       )
                   })
               }
            </>
        )
    }
}

export default People