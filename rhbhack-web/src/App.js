import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Jobs from './components/Jobs/Jobs.js';
import Grid from '@material-ui/core/Grid';


import  NavbarPage  from './components/NavbarPage/NavbarPage.js';
function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Container>
      <Grid container spacing={3}>
      <Grid item xs={8}>
      <br></br> 
        <Jobs/>
        </Grid>
        <Grid item xs={4} > 
        <br></br>         
        <Jobs/>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
