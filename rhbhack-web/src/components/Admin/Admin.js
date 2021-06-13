import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button, Row, Col } from 'react-bootstrap'
import { Grid } from "@material-ui/core";
import NavbarPage from '../NavbarPage/NavbarPage.js';
import CreateContract from '../CreateContract/CreateContract.js';
import ContractList from "../ContractList/ContractList";
import { makeStyles } from '@material-ui/core/styles';
// import UserFetch from './api/UserFetch';
// import { getUser } from './api/UserFetch.js';
import Jobs from '../Jobs/Jobs';

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

const Admin = () => {

    // const [user, setUser] = useState([]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Grid container> */}
            {/* <Grid item xs={12} spacing={3}> */}
            {/* <CreateContract /> */}
            {/* </Grid> */}
            {/* </Grid> */}
            <Container>
                <Grid container>
                    <Grid item xs={8}>
                        <CreateContract />
                    </Grid>
                    <Grid item xs={4} >
                        <Jobs />
                    </Grid>
                </Grid>
            </Container>
    </div>
            );
}

            export default Admin;
