import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap'
import { Grid } from "@material-ui/core";
import NavbarPage from './components/NavbarPage/NavbarPage.js';
import CreateContract from './components/CreateContract/CreateContract.js';
import ContractList from "./components/ContractList/ContractList.js";
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Jobs from './components/Jobs/Jobs.js';
// import Grid from '@material-ui/core/Grid';


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
  const a1 = "UI";
  const a2 = "DS";
  const a3 = "ML";
  const a4 = "BE";
  const a5 = "FE";

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
      <Grid item xs={'auto'} spacing={3}>
        <Grid container>
          <Jobs/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
