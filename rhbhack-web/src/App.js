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
      <Grid item xs={4}>
          <Row>
            <ListGroup>
              <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Row>
        </Grid>
        <Grid item xs={4}>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row> 
          </Grid>
        <Grid item xs={4} align='right'>  
        <Jobs/>
        <br></br>
        <Jobs/>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
