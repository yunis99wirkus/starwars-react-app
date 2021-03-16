import React from 'react';
import { Component, Container } from 'react-bootstrap';

class CovidData extends React.Component{
    constructor(){
        super()
        this.state = {
            covid_data: {},
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading:true});
        let limit = 100;

        fetch(`https://api.apify.com/v2/datasets/Ugq8cNqnhUSjfJeHr/items?format=json&clean=1&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    covid_data:data,
                    loading: false
                })
            })
    }

    render(){
        
        const padding = {
            padding: "2em"
        }

        const loadingMsg = this.state.loading ? "Loading..." : null

        return(
            <Container className="contPadding">
                <div className="container" style={padding}>
                    <div className="row">
                        <div>
                            <h3>{loadingMsg}</h3>
                        </div>        
                        <div className="col">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>
                                            Tested
                                        </th>
                                        <th>
                                            Infected
                                        </th>
                                        <th>
                                            Deceased
                                        </th>
                                        <th>
                                            Timestamp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.covid_data && this.state.covid_data.length && this.state.covid_data.map((item)=>{
                                            return(
                                                <tr>
                                                    <td>{item.tested}</td>
                                                    <td>{item.infected}</td>
                                                    <td>{item.deceased}</td>
                                                    <td>{item.lastUpdatedAtApify}</td>
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

export default CovidData;