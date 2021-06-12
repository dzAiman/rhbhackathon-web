import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import UI from '../../assets/UI.png';
import ApplyContractForm from '../ApplyContractForm/ApplyContractForm';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 545,
    },
    media: {
        height: 150,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        justify: 'flex-end',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ContractList = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [imgName, setImgName] = useState();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ApplyContractForm />
                    </IconButton>
                }
                title="Power BI Data Visualization"
                subheader="Application deadline: "
            />
            <CardMedia component="img" image={UI} height="150" title="Paella dish" />
            <CardContent>
                <IconButton aria-label="add to favorites">
                    <Typography variant="body2"><AttachMoneyOutlinedIcon fontSize="small" />RM1000</Typography>
                </IconButton>
                <IconButton aria-label="share">
                    <Typography variant="body2">Skillset: Beginner</Typography>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardContent>
            <CardActions disableSpacing>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ContractList;