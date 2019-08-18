import React from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

import SinglePerson from './singlePerson';

class People extends React.Component {
    constructor(props){
        super(props)
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
        console.log(event.target.value)
    }

    render(){
        const { people } = this.state;
        let allChars = people.map(person => {
            return person.name
        })
        console.log(people)
        return(
            <>
               {
                   allChars.map((char, i) => {
                       return (
                           <div>
                               {char}{i}
                               <Link to={`/people/${i}`} component={char}><li onClick={this.handleCharDisplay} value={i}>{char}</li></Link>
                            </div>
                       )
                   })
               }
            </>
        )
    }
}

export default People