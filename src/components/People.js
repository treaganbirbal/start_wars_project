import React from 'react';

class People extends React.Component {
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    render(){
        return(
            <>
                <h1>People</h1>
            </>
        )
    }
}

export default People