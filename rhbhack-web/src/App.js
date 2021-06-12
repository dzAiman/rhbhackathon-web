import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap'
import { Grid } from "@material-ui/core";
import NavbarPage from './components/NavbarPage/NavbarPage.js';
import CreateContract from './components/CreateContract/CreateContract.js';
import ContractList from "./components/ContractList/ContractList.js";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} spacing={3}>
          <NavbarPage />
        </Grid>
        <Grid item xs={12} spacing={3}>
          <CreateContract />
        </Grid>
      </Grid>
      <Grid item xs={8}>
          <ContractList />
          <ContractList />
      </Grid>
      <Grid item xs={4} direction="row">
        <ContractList />
        <ContractList />
        <ContractList />
        <ContractList />
        <ContractList />
      </Grid>
      <Grid item xs={'auto'} spacing={3}>
        <Grid container>
          <Card style={{ width: '18rem', spacing: '5' }}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
