import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import Body from './component/Body';
import Automate from './component/Automate';
import Foter from './component/Foter';

function App() {
  return (
      <>
        <NavBar/>  
        <Body/>
        <Automate/>
        <Foter/>
      </>
  );
}

export default App;