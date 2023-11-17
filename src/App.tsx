import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackContainer from './components/BackContainer/Container';
import Mostrador from './components/Screen/Mostrador';


function App() {
  return (
    <div className="App">
       <div 
        style={{
          position: 'relative'        
        }}
      >
          <BackContainer/>
          
          
      </div>
    </div>
  );
}

export default App;
