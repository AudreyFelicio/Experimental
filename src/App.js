import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Carousel from './Components/Carousel.js';
import './App.css';
import Button1 from './Components/Button.js';
import {theme1,theme2,theme3,theme4} from './Components/ButtonThemes.js'


function App() {
  return (
    <div className="app">
      <Carousel />
      <div className="buttons-container">
        <ThemeProvider theme={theme1}>
          <div className="App">
            <Button1>Theme One!</Button1>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={theme2}>
          <div className="App">
            <Button1>Theme Two!</Button1>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={theme3}>
          <div className="App">
            <Button1>Theme Two!</Button1>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={theme4}>
          <div className="App">
            <Button1>Theme Two!</Button1>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
