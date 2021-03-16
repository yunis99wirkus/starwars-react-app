import React from 'react';
import { Component, Container } from 'react-bootstrap';

class TestForm extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            //makes this function re-usable
            firstName : event.target.value
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
                            <h1>Test Form: </h1>
                            <br/>
                            <form>
                                <input
                                type="text"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.handleChange}
                                />
                                <h4>Name: {this.state.firstName}</h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestForm;