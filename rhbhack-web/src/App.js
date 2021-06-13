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

// import UserFetch from './api/UserFetch';
// import { getUser } from './api/UserFetch.js';

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
  const a1 = "UI";
  const a2 = "DS";
  const a3 = "ML";
  const a4 = "BE";
  const a5 = "FE";
 

  return (
    <div className={classes.root}>
        <NavbarPage />
      <Container>
        <br></br>
      <Grid container spacing={3}>
         <Grid item xs={8}>
          {/* <CreateContract /> */}
          {/* <UserFetch /> */}
          <ContractList />
          
        </Grid>            
      <Grid item xs={4} >
        {/* <Grid container direction="column"> */}
          <Jobs />
        {/* </Grid> */}
      </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
