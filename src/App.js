import React from 'react';
import { Component, Container } from 'react-bootstrap';
import Planets from './components/Planets.js';
import CovidData from './components/CoronaData.js';
import Character from './components/Character.js';
import NYT_articles from './components/NYTapi.js';
import TestForm from './components/MyForm.js';
import FullForm from './components/MyForm2.js'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            value: []
        }
    }

    render(){

        const margin = {
            margin: "0.5em"
        }

        return(
            <div style={margin}>
                <Character/>
                <hr/>
                <Planets/>
                <hr/>
                <CovidData/>
                <hr/>
                <NYT_articles/>
                <hr/>
                <TestForm/>
                <hr/>
                <FullForm/>
            </div>
        )
    }
}

export default App;