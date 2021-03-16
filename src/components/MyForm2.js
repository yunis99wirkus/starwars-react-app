import React from 'react';
import { Component, Container } from 'react-bootstrap';

class FullForm extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            //makes this function re-usable
            [event.target.name]: event.target.value
        });
    };


    render(){

        const margin = {
            margin: "0.5em"
        }


        return(
            <div style={margin}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Full Form: </h1>
                            <br/>
                            <form>
                                <input
                                type="text"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.handleChange}
                                />
                                &nbsp;
                                <input
                                type="text"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                />
                                <h4>Name: {this.state.firstName} {this.state.lastName}</h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullForm;