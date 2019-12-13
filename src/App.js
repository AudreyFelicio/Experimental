import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Carousel from './Components/Carousel.js';
//import Carousel from './Components/carouselNextVersion.js';
import Image1 from './Pictures/picture1.jpeg';
import Image2 from './Pictures/picture2.jpg';
import Image3 from './Pictures/picture3.jpg';
import './App.css';
import Button1 from './Components/Button.js';
import {theme1,theme2,theme3,theme4} from './Components/ButtonThemes.js';


function App() {
  return (
    <div className="app">
      <Carousel />
    </div>
  );
}

export default App;
