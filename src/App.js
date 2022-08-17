import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Characters from './components/Characters';
import { Header } from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <>
      <div className= {"App "+ bg}>
        <Header
          darkMode={darkMode}
          onClick={() => setDarkMode(!darkMode)}
        ></Header>
        <Characters></Characters>
      </div>
    </>
  );
}

export default App;
