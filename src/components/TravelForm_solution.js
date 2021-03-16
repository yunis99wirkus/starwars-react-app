import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isHalal: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <Container className="contPadding">
                                <h1 className="text-center">Holiday Time!</h1>
                <main>
                    <Form>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <Form.Control
                                    type="number"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    placeholder="Age"
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <span><strong>Gender: </strong></span>
                                <Form.Check inline
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={this.state.gender === "male"}
                                    onChange={this.handleChange}
                                    label="Male"
                                />
                                <Form.Check inline
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={this.state.gender === "female"}
                                    onChange={this.handleChange}
                                    label="Female"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Form.Control as="select"
                                    value={this.state.destination}
                                    name="destination"
                                    onChange={this.handleChange}
                                >
                                    <option value="">-- Please Choose a destination --</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="North Pole">North Pole</option>
                                    <option value="South Pole">South Pole</option>
                                </Form.Control>
                            </div>
                            <div class="col-12 col-md-6">
                                <span><strong>Dietary Restrictions: </strong></span>
                                <Form.Check inline
                                    type="checkbox"
                                    name="isVegan"
                                    value="Vegan"
                                    onChange={this.handleChange}
                                    checked={this.state.isVegan}
                                    label="Vegan"
                                />
                                <Form.Check inline
                                    type="checkbox"
                                    name="isKosher"
                                    value="Kosher"
                                    onChange={this.handleChange}
                                    checked={this.state.isKosher}
                                    label="Kosher"
                                />
                                <Form.Check inline
                                    type="checkbox"
                                    name="isHalal"
                                    value="Halal"
                                    onChange={this.handleChange}
                                    checked={this.state.isHalal}
                                    label="Halal"
                                />
                                <Form.Check inline
                                    type="checkbox"
                                    name="isLactoseFree"
                                    value="isLactoseFree"
                                    onChange={this.handleChange}
                                    checked={this.state.isLactoseFree}
                                    label="Lactose Free"
                                />
                            </div>
                        </div>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.destination}</p>
                    <p>Your dietary restrictions:</p>

                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Halal: {this.state.isHalal ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>

                </main>
            </Container>
        )
    }
}

export default App
