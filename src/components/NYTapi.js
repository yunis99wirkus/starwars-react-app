import React from 'react';
import { Component, Container } from 'react-bootstrap';

class NYT_articles extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            topList: {}
        }
    }

    componentDidMount(){
        const api_key = "c6zj2i3U2N65biylPQkOLrHNHhfRbUQy";
        const days = 7;
        const secret = "lfmruD0Kk6bjEzJ5";
        let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=${api_key}`;
   
        this.setState({loading:true})

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topList:data.results,
                    loading: false
                })
            })
    }

    render(){

        const loadingMsg = this.state.loading ? "Loading..." : null;
        const padding = {
            padding: "2em"
        }

        return(
            <div className="container" style={padding}>
                <div className="row bg-primary text-white pd-10">
                    <h2>New York Times Most Popular Articles of the past 7 days 
                        <span>  </span>
                        <span className="badge badge-success bg-danger">NEW</span>
                    </h2>
                </div>
                <div className="row">
                    <div>
                        <h3>{loadingMsg}</h3>
                    </div>        
                    <div className="col">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Section
                                    </th>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Abstract
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.topList && this.state.topList.length && this.state.topList.map((item)=>{
                                        return(
                                            <tr>
                                                <td>{item.published_date}</td>
                                                <td>{item.section}</td>
                                                <td>{item.title}</td>
                                                <td>{item.abstract}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default NYT_articles;