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
    return (
        <h1>hellow</h1>
    )
    }
}

export default SinglePerson;