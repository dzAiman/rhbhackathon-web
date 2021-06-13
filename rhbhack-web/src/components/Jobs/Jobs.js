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
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
// 1. Import axios function
import { getBuletin } from '../../api/BuletinFetch';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
  },
  avatar: {
    backgroundColor: '#70CDE3',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {setOpen(true);  };

  const handleClose = () => {setOpen(false);};
  
  const handleExpandClick = () => {setExpanded(!expanded);};

  // 2. Set props
  const [buletin, setBuletin] = useState([]);

  useEffect(() => {
    let mounted = true;
    getBuletin()
        .then(items => {
            if (mounted) {
                setBuletin(items)
            }
        })
    return () => mounted = false;
    }, [])

    buletin.map(x => {
      if (x.department == 'Data Science') {
        
      }
      
  })
    

  return (
   
    <ul>
      {buletin.map(x => (
    <Grid container direction="column" spacing={4}>
    <Grid item xs>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {x.department.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'').slice(0, 3)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
          <h7 style={{fontWeight: "bold"}}> {x.title}</h7>          
        }
        subheader={x.createdDate}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {x.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="join newsletter">
          <PersonAddIcon/>
        </IconButton> */}
        <Button variant="contained" onClick={handleOpen} style={{ marginLeft: "auto", backgroundColor:'#0067B1',color:'#FFFFFF'}}> Get Details </Button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">Project Description</h3>
            <br></br>
            <p>Project Name: {x.title}</p>
            <p>Department: {x.department}</p>
            <p>Person In Charge: {x.manager}</p>
            <p>Description:{x.description}</p>  
            

          </div>
        </Fade>
      </Modal>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>In Details:</Typography>
          <Typography paragraph>
           
          </Typography>
          
        </CardContent>
      </Collapse> */}
    </Card> </Grid></Grid>
      ))}
      </ul>
     
  );
}
