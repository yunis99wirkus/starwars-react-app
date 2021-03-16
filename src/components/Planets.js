import React from 'react';
import { Component, Container } from 'react-bootstrap';

class Planets extends React.Component{
    constructor(){
        super()
        this.state = {
            planets: {},
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading:true})

        fetch("https://swapi.dev/api/planets/")
            .then(data => data.json())
            .then(response => {
                this.setState(()=>{
                    const results = response.results;
                    return{
                        loading:false,
                        planets: results
                    }
                })
            })
    }

    render(){
        
        const padding = {
            padding: "2em"
        }

        return(
            <Container className="contPadding">
                <div className="container" style={padding}>
                    <div className="row">        
                        <div className="col">
                            <table className="table table-striped table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            Planet
                                        </th>
                                        <th>
                                            Climate
                                        </th>
                                        <th>
                                            Terrain
                                        </th>
                                        <th>
                                            Population
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.planets && this.state.planets.length && this.state.planets.map((item, index)=>{
                                            return(
                                                <tr>
                                                    <td key={index}>{item.name}</td>
                                                    <td>{item.climate}</td>
                                                    <td>{item.terrain}</td>
                                                    <td>{item.population}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Planets;