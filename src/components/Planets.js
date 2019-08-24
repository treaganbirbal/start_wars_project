import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import axios from 'axios';

class Planets extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            planets: [],
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/planets')
        .then(res => {
            this.setState({
                planets: res.data.results
            })
        })
        .catch(err => console.log(err))
    }

    handleClick = (event) => {
        this.props.history.push('/planets/' + event.target.id)
        console.log(this.props.history)
    }

    render(){
        const { planets } = this.state;
        return(
            <>
                {planets.map((planet, id) => {
                   return <p onClick={this.handleClick} id={++id} value={++id}>{planet.name}</p>
                })}
               
            </>
        )
    }
}

export default Planets;