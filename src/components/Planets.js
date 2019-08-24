import React, {Component} from 'react';
import axios from 'axios';

class Planets extends Component {
    constructor(){
        super()
        
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
        console.log(event.target.id)
    }

    render(){
        const { planets } = this.state;
        return(
            <>
                {planets.map((planet, id) => {
                   return <p onClick={this.handleClick} id={++id}>{planet.name}</p>
                })}
               
            </>
        )
    }
}

export default Planets;