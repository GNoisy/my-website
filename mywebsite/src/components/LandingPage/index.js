import React, { Component } from "react";
import Particle from "../Particles";
import Container from 'react-bootstrap/Container';
import './style.css'


export default class LandingPage extends Component {
    render() {
      return (
        <>
          <Container fluid>
            <Particle />
            {/* <div className="My-Intro">
              <p>Hello, I'm Giovanni Noisy</p>
            </div> */}
            
          </Container>
        </>
      );
    }
}