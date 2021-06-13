import React, { useState, useEffect } from 'react';
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
import Grid from '@material-ui/core/Grid';

import UI from '../../assets/UI.png';
import BE from '../../assets/BE.png';
import DS from '../../assets/DS.png';
import ML from '../../assets/ML.png';
import FE from '../../assets/FE.png';
import ApplyContractForm from '../ApplyContractForm/ApplyContractForm';
// import Api from '../../api/api';
// 1. Import axios function
import { getContracts } from '../../api/ContractFetch';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '95%',
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
    // 2. Set props
    const [contract, setContract] = useState([]);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // 3. Copy this
    useEffect(() => {
        let mounted = true;
        getContracts()
            .then(items => {
                if (mounted) {
                    setContract(items)
                }
            })
        return () => mounted = false;
    }, [])



    // For understanding
    console.log(contract);

    contract.map(x => {
        if (x.category == 'Data Science') {
            x.imageVar = DS;
        }
    })



    return (
        // Add a div here for wrapper
        <div>
            {contract.map(x => (
                <Grid container direction="column" spacing={3}>
                <Grid item xs>
                <Card className={classes.root}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <ApplyContractForm />
                            </IconButton>
                        }
                        title={x.title}
                        subheader={"Application deadline: " + x.applicationDeadline}
                    />
                    <CardMedia component="img" image={x.imageVar} height="150" title="Paella dish" />
                    <CardContent>
                        <IconButton aria-label="add to favorites">
                            <Typography variant="body2">Incentives: {x.reward}</Typography>
                        </IconButton>
                        <IconButton aria-label="share">
                            <Typography variant="body2">Skillset: {x.expRequired}</Typography>
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
                            <Typography paragraph>Description:</Typography>
                            <Typography paragraph>
                                {x.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    {/* <div style={{ height: 1,width:  '100%',backgroundColor: '#bdbdbd',}}></div> */}
                </Card></Grid></Grid>             
            ))}
        </div>
    )

}

export default ContractList;