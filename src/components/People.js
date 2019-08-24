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

    handleClick = (event)  => {
        console.log("id:", event.target.id)
        this.props.history.push(`/people/` + event.target.id)
    }

    render(){
        const { people } = this.state;
        let allChars = people.map(person => {
            return person.name
        })
        // console.log(people)
        return(
            <>
            <div className='people-img'>
                <div className='overlay'></div>
            </div>
            <div className='people-list'>
               {   
                   allChars.map((char, i) => {
                       return (
                                                          <li className='person-item'onClick={this.handleClick} id={++i} value={i++}>{char}</li>
                       )
                   })
               }
               </div>
            </>
        )
    }
}

export default People