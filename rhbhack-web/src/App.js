import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap'
// import { Grid } from "@material-ui/core";
import NavbarPage from './components/NavbarPage/NavbarPage.js';
import CreateContract from './components/CreateContract/CreateContract.js';
import ContractList from "./components/ContractList/ContractList.js";
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Jobs from './components/Jobs/Jobs.js';
import Grid from '@material-ui/core/Grid';
import Admin from "./components/Admin/Admin.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  // const [user, setUser] = useState([]);

  const classes = useStyles();

  // return (
  //   <div className={classes.root}>
  //       <NavbarPage />
  //     <Container>
  //       <br></br>
  //     <Grid container spacing={3}>
  //        <Grid item xs={8}>
  //         {/* <CreateContract /> */}
  //         {/* <UserFetch /> */}

  return (
    <div className={classes.root}>
        <Container>
          <Grid container>
            <Grid item xs={8}>
              <ContractList />
            </Grid>
            <Grid item xs={4} >
              <Jobs />
            </Grid>
          </Grid>
          {/* <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch> */}
        </Container>
    </div>
  );

  // function Admin() {
  //   return 
  //   <Admin />
  // }

}

export default App;
