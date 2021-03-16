import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

/**
 * Exercise: Complete the partially-finished travel form so that it works and uses the correct React Bootstrap elements.
 * Remember to use the concept of controlled forms https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time as you're filling it out
 * 
 */

class TravelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            diet:{
                isVegan: false,
                isVegetarian: false,
                isLactose: false,
                isGluten: false
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
    };

    handleSubmit(event) {
        alert('The form was submitted with this data: x');
        event.preventDefault();
    };

    render() {
        return (
            <Container>
                <main>
                    <form>
                        <div className="row">
                            <div className="col">
                                <div className="form-group mb-3">
                                    <input
                                    type="text"
                                    value={this.state.firstName}
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                    type="text"
                                    value={this.state.lastName}
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={this.handleChange}
                                    />
                                    <br />
                                    <input
                                    type="number"
                                    value={this.state.age}
                                    name="age"
                                    placeholder="your age"
                                    onChange={this.handleChange}
                                    />
                                    <br />

                                    <label className="form-label">Gender: </label>
                                    <Form.Check
                                        type="checkbox"
                                        name="gender"
                                        checked={this.state.gender}
                                        onChange={this.handleChange}
                                        label="male"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        name="gender"
                                        checked={this.state.gender}
                                        onChange={this.handleChange}
                                        label="female"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        name="gender"
                                        checked={this.state.gender}
                                        onChange={this.handleChange}
                                        label="diverse"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row align-items-center">
                            <div className="col">
                                <Form.Group>
                                    <Form.Label>Choose your destination: </Form.Label>
                                    <Form.Control as="select"
                                    value={this.state.destination}
                                    onChange={this.handleChange}
                                    name="destination"
                                    >
                                        <option value="norway">Norway</option>
                                        <option value="italy">Italy</option>
                                        <option value="sweden">Sweden</option>
                                        <option value="uruguay">Uruguay</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>

                        <input placeholder="Last Name" /><br />
                        <input placeholder="Age" /><br />

                        {/* Create radio buttons for gender here */}
                        <br />

                        {/* Create select box for location here */}
                        <br />

                        {/* Create check boxes for dietary restrictions here */}
                        <br />

                        <Button variant="primary" type="submit">Submit</Button>
                    
                    </form>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <h2>Entered Information:</h2>
                            <table className="table table-light table-hover">
                                <thead>
                                    <tr>
                                        <th>attribute</th>
                                        <th>your entered value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Name: </td>
                                        <td>{this.state.firstName} {this.state.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Age:</td>
                                        <td>{this.state.age}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender:</td>
                                        <td>{this.state.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <td>chosen destination:</td>
                                            <td>{this.state.destination}</td>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>diet requirements</td>
                                        <td>{this.state.diet.isGluten ? "gluten free" : "gluten allowed"}</td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td>{this.state.diet.isLactose ? "lactose free" : "lactose allowed"}</td>
                                    </tr>
                                    <tr>
                                        <td>diet restrictions</td>
                                        <td>{this.state.diet.isVegan ? "vegan" : "non-vegan"}</td>
                                    </tr>
                                    <tr>
                                        <td>diet restrictions</td>
                                        <td>{this.state.diet.isVegetarian ? "vegetarian" : "non-vegetarian"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </Container>
        )
    }
}

export default TravelForm;
