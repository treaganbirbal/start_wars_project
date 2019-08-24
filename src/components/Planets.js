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

    render(){
        const { planets } = this.state;
        return(
            <>
                {planets.map(planet => {
                   return <p>{planet.name}</p>
                })}
               
            </>
        )
    }
}

export default Planets;