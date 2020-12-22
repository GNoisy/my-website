import React, { Component } from "react";
import Particles from "react-tsparticles";
import "./style.css";

export default class Particle extends Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
            //   value: "#0f1d68",
            //   background: rgb(32,18,36);
            //   background: linear-gradient(90deg, rgba(32,18,36,1) 0%, rgba(102,41,41,1) 48%, rgba(56,24,22,1) 99%);
            },
            backgroundMode: {
              enable: true,
              zIndex: -1,
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.2,
                size: 5,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1200,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}