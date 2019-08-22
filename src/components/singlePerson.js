import React from 'react';
import axios from 'axios'

class SinglePerson extends React.Component{
    constructor(){
        super()
       this.state = {
            movie: {}
        }
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
            this.setState({
                movie: res.data
            })
        })
    }
    render(){
        const { movie } = this.state
    return (
        <>
          <card>
            <p>{movie.name}</p>
            <p>{movie.gender}</p>
            <p>{movie.hair_color}</p>
          </card>
        </>
    )
    }
}

export default SinglePerson;