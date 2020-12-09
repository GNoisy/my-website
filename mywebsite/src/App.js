import React from 'react';
import './App.css';

//components
import Header from './components/Navbar'
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <LandingPage />
        <Header />
      </div>
      
      {/* <div>
        <Header /> 
      </div> */}
    </div>
  );
}

export default App;
