import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { 
    Card, 
    CardActions, 
    CardContent, 
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
import Avatar from '@material-ui/core/Avatar';
import CreateContractForm from "../CreateContractForm/CreateContractForm.js";
import ApplyContractForm  from "../ApplyContractForm/ApplyContractForm.js";

const useStyles = makeStyles({
    root: {
        maxWidth: 545
    }
});

const CreateContract = () => {
    const classes = useStyles();
    return (
        <Card alignItems="center" justify="center" className={classes.root}>
            <CardContent> 
                <Typography gutterBottom variant="h5" component="h2">
                    Create and Manage contracts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Create a contract with the relevant details to be published.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <CreateContractForm />
            </CardActions>
        </Card>
    );
}

export default CreateContract;