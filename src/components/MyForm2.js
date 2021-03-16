import { Button } from 'bootstrap';
import React from 'react';
import { Component, Container, Form } from 'react-bootstrap';

class FullForm extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            inputTextArea: "",
            textArea: "",
            loveCourse: false,
            favouriteDrink: [],
            favColor:""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
        //this.setState({
            //makes this function re-usable
            //[event.target.name]: event.target.value
        //});
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
                            <form onSubmit="/">
                                <div className="mb-3">
                                    <h4 className="form-label">Name: {this.state.firstName} {this.state.lastName}</h4>
                                    <input
                                    type="text"
                                    value={this.state.firstName}
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleChange}
                                    />
                                    &nbsp;
                                    <input
                                    type="text"
                                    value={this.state.lastName}
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                <br/>
                                <div className="mb-3">
                                    <Form.Control
                                    type="textarea"
                                    name="inputTextArea"
                                    value={this.state.inputTextArea}
                                    placeholder="your message"
                                    onChange={this.handleChange}
                                    />
                                    <br/>
                                    <p>{this.state.inputTextArea}</p>
                                </div>
                                <br/>
                                <div className="mb-3">
                                    <textarea
                                    className="form-control"
                                    value={this.state.textArea}
                                    name="textArea"
                                    onChange={this.handleChange}
                                    cols="50"
                                    rows="5"
                                    maxlength="180"
                                    />
                                    <br/>
                                    <p>{this.state.textArea}</p>
                                </div>

                                <Form.Check
                                type="checkbox"
                                name="loveCourse"
                                checked={this.state.loveCourse}
                                onChange={this.handleChange}
                                label="Love this course?"
                                />

                                <br/>

                                <Form.Group>
                                    <h5>Favourite Drink?</h5>
                                    <Form.Check
                                        type="radio"
                                        name="favouriteDrink"
                                        checked={this.state.favouriteDrink === "coffee"}
                                        value="coffee"
                                        onChange={this.handleChange}
                                        label="coffee"
                                    />
                                    <Form.Check
                                        type="radio"
                                        name="favouriteDrink"
                                        checked={this.state.favouriteDrink === "tea"}
                                        value="tea"
                                        onChange={this.handleChange}
                                        label="tea"
                                    />
                                    <Form.Check
                                        type="radio"
                                        name="favouriteDrink"
                                        checked={this.state.favouriteDrink === "water"}
                                        value="water"
                                        onChange={this.handleChange}
                                        label="water"
                                    />
                                </Form.Group>
                                <br/>
                                <div className="form-group mb-3">
                                    <label className="form-label">What is your favourite color?</label>
                                    <select 
                                    className="form-control"
                                    value={this.state.favColor}
                                    name="favColor"
                                    onChange={this.handleChange}
                                    >
                                        <option value="black">Black</option>
                                        <option value="orange">Orange</option>
                                        <option value="blue">Blue</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="green">Green</option>
                                        <option value="red">Red</option>
                                    </select>
                                </div>

                                <div>
                                    <Button variant="info" type="submit">Submit Form</Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullForm;