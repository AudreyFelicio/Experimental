import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import './App.css';
import { Button1, theme } from './Components/Button.js';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button1>Default Theme</Button1>
      </div>
    </ThemeProvider>
  );
}

export default App;
