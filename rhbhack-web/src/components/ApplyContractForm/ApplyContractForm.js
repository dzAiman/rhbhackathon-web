import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import Alert from '@material-ui/lab/Alert';

import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Paper,
    Link,
    Grid,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { getUser } from '../../api/UserFetch';

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50
    const left = 50
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 650,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     }
//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     }
//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     return errors;
// };

const ApplyContractForm = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const [user, setUser] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const submitHandle = () => {
        setAlert(true);
    }

    const submitHandleClose = () => {
        setAlert(false);
    }

    useEffect(() => {
        let mounted = true;
        getUser()
            .then(items => {
                if (mounted) {
                    setUser(items)
                }
            })
        return () => mounted = false;
    }, [])

    console.log(user);
    let alertMessage;
    if(alert) {
        alertMessage = <Alert onClose={() => { submitHandleClose(); handleClose()}}>Application successfully submitted!</Alert>
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Apply
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {/* <h2>Simple React Modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                    </p> */}
                    {/* Add form here */}
                    <CssBaseline />
                    <Typography variant="h6" align="center" component="h1" gutterBottom>
                        Apply this Contract
                    </Typography>
                    <Form
                        onSubmit={submitHandle}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Paper style={{ padding: 16 }}>
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={8}>
                                            <Card className={classes.root} variant="outlined">
                                                <CardContent>
                                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                        {user.map(x=> x.email)}
                                                    </Typography>
                                                    <Typography variant="h5" component="h2">
                                                    {user.map(x=> x.firstName)} {user.map(x=> x.lastName)}
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {user.map(x => x.qualification)}
                                                        <br />
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item alignContent="center">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={submitting}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                        {alertMessage}
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </form>
                        )}
                    />

                </div>
            </Modal>
        </div>
    );
}

export default ApplyContractForm;