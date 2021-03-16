import React from 'react';
import { Component, Container } from 'react-bootstrap';

class Character extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({loading:true})

        fetch("https://swapi.dev/api/people/4")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character:data,
                    loading: false
                })
            })
    }

    render(){

        const loadingMsg = this.state.loading ? "Loading..." : this.state.character.name;
        const padding = {
            padding: "2em"
        }

        return(
            <div className="container" style={padding}>
                <div className="row">        
                    <div className="col">
                        <p>
                            <strong>Name: </strong>{loadingMsg} <br/>
                            <strong>Height: </strong>{this.state.character.height}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character;