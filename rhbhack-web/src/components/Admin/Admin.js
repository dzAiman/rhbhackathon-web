import React, { useEffect, useState } from "react";
import NavbarPage from '../NavbarPage/NavbarPage.js';
import CreateContract from '../CreateContract/CreateContract.js';
import ContractList from "../ContractList/ContractList";
import { makeStyles } from '@material-ui/core/styles';
// import UserFetch from './api/UserFetch';
// import { getUser } from './api/UserFetch.js';
import Jobs from '../Jobs/Jobs';
import {
    Card,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    IconButton,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from "@material-ui/core";
import StatusPNG from '../../assets/status.png';
import CategoryPNG from '../../assets/category.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: '100%',
        width: '100%',
    },
    media: {
        height: 150,
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
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item justify="center" xs={12}>
                    <CreateContract />
                </Grid>
                <Grid container justify="center" alignItems="center" direction="row">
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={StatusPNG}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Application Status
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={CategoryPNG}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Category Percentage
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Admin;
