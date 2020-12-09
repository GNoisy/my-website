import React, { Component } from "react";
import Particle from "../Particles";
import Container from 'react-bootstrap/Container';
import './style.css'


export default class LandingPage extends Component {
    render() {
      return ( 
        <div>
            <Container>
                <div className="My-Intro">
                    <p>
                    Hello, I'm Giovanni Noisy
                    </p>
                </div>
            </Container>
            
            <div>
                <Particle />
            </div>
            
        </div>
      );
    }
}