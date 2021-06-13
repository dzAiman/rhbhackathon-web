import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
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

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50;
    const left = 50;
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
const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    return errors;
};

const CreateContractForm = () => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Create Contract
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
                        Submit a Contract
                    </Typography>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Paper style={{ padding: 16 }}>
                                    <Grid container alignItems="flex-start" spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                fullWidth
                                                required
                                                name="Contract Title"
                                                component={TextField}
                                                type="text"
                                                label="Contract Title"
                                            />
                                        </Grid>
                                        {/* <Grid item xs={6}>
                                            <Field
                                                fullWidth
                                                required
                                                name="lastName"
                                                component={TextField}
                                                type="text"
                                                label="Last Name"
                                            />
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <Field
                                                name="manager"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="email"
                                                label="Contract Manager"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="managerEmail"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="email"
                                                label="Manager's Email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="description"
                                                fullWidth
                                                required
                                                component={TextField}
                                                type="text"
                                                label="Description"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field
                                                fullWidth
                                                required
                                                name="rewards"
                                                component={TextField}
                                                type="text"
                                                label="Rewards"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            {/* <Field
                                                fullWidth
                                                name="teamNumber"
                                                component={Select}
                                                label="Team Number"
                                                formControlProps={{ fullWidth: true }}
                                            >
                                                {[0, 1, 2, 3, 4, 5].map((value) => (
                                                    <MenuItem value={value}>{value}</MenuItem>
                                                ))}
                                            </Field> */}
                                            {/* <Field
                                                fullWidth
                                                required
                                                name="teamNumber"
                                                component={TextField}
                                                type="text"
                                                label="Team Number"
                                            /> */}
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <FormControlLabel
                                                label="Employed"
                                                control={
                                                    <Field
                                                        name="employed"
                                                        component={Checkbox}
                                                        type="checkbox"
                                                    />
                                                }
                                            />
                                        </Grid> */}
                                        <Grid item xs={12}>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Experience Level</FormLabel>
                                                <RadioGroup row>
                                                    <FormControlLabel
                                                        label="Beginner"
                                                        control={
                                                            <Field
                                                                name="expRequired"
                                                                component={Radio}
                                                                type="radio"
                                                                value="Beginner"
                                                            />
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        label="Intermediate"
                                                        control={
                                                            <Field
                                                                name="expRequired"
                                                                component={Radio}
                                                                type="radio"
                                                                value="Intermediate"
                                                            />
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        label="Advanced"
                                                        control={
                                                            <Field
                                                                name="expRequired"
                                                                component={Radio}
                                                                type="radio"
                                                                value="Advanced"
                                                            />
                                                        }
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        {/* <Grid item>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Sauces</FormLabel>
                                                <FormGroup row>
                                                    <FormControlLabel
                                                        label="Ketchup"
                                                        control={
                                                            <Field
                                                                name="sauces"
                                                                component={Checkbox}
                                                                type="checkbox"
                                                                value="ketchup"
                                                            />
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        label="Mustard"
                                                        control={
                                                            <Field
                                                                name="sauces"
                                                                component={Checkbox}
                                                                type="checkbox"
                                                                value="mustard"
                                                            />
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        label="Salsa"
                                                        control={
                                                            <Field
                                                                name="sauces"
                                                                component={Checkbox}
                                                                type="checkbox"
                                                                value="salsa"
                                                            />
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        label="Guacamole 🥑"
                                                        control={
                                                            <Field
                                                                name="sauces"
                                                                component={Checkbox}
                                                                type="checkbox"
                                                                value="guacamole"
                                                            />
                                                        }
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </Grid> */}
                                        {/* <Grid item xs={12}>
                                            <Field
                                                fullWidth
                                                name="notes"
                                                component={TextField}
                                                multiline
                                                label="Notes"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                fullWidth
                                                name="city"
                                                component={Select}
                                                label="Select a City"
                                                formControlProps={{ fullWidth: true }}
                                            >
                                                <MenuItem value="London">London</MenuItem>
                                                <MenuItem value="Paris">Paris</MenuItem>
                                                <MenuItem value="Budapest">
                                                    A city with a very long Name
                                                </MenuItem>
                                            </Field>
                                        </Grid> */}
                                        {/* <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                type="button"
                                                variant="contained"
                                                onClick={reset}
                                                disabled={submitting || pristine}
                                            >
                                                Reset
                                            </Button>
                                        </Grid> */}
                                        <Grid item style={{ marginTop: 16 }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={submitting}
                                            >
                                                Submit
                                            </Button>
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

export default CreateContractForm;