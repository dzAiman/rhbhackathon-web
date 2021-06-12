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
        <Card className={classes.root}>
            <CardContent> 
                <Typography gutterBottom variant="h5" component="h2">
                    Create and Manage contracts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    CardActions are just a flexbox component that wraps the children in
                    8px of padding and 8px horizontal padding between children.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <CreateContractForm />
            </CardActions>
            <CardActions disableSpacing>
                <ApplyContractForm />
            </CardActions>
        </Card>
    );
}

export default CreateContract;