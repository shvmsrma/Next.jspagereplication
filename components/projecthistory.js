import React from 'react';
import { Button, Typography } from '@material-ui/core';
import {List,ListItem,ListItemAvatar,ListItemText,Avatar} from '@material-ui/core'
import {Paper} from '@material-ui/core'; 
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import {Grid} from '@material-ui/core'; 
import Rating from '@material-ui/lab/Rating';
import {Box} from '@material-ui/core';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import dd from '../images/default.jpg'
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
    root: {
      
      backgroundColor: lighten('#24B855', 0.5),
    },
    bar: {
    height:10,
      width:80,
      borderRadius: 40,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
      margin: {
        margin: theme.spacing(1),
      },
    
  }));

export default function Projecthistory(){

    const classes = useStyles();

return(
    <div className={classes.container}>
        <h3>My Project History and feedbacks</h3>
        <hr />
        <Paper>
        <Grid container spacing={3}>
            <Grid item xs={5}>
                <Typography>
                    5.0
                </Typography>
                    <Rating name="read-only" value='5' readOnly />
                    <div style={{display:'flex'}}>
                    <PermIdentityTwoToneIcon />
                    <Typography>723 total</Typography>

                    </div>
        
            </Grid>

            <Grid item xs={5}>
            <div style={{float:'left', margin:10}}>
            <StarRateIcon />
            </div>
        <div style={{overflow:'hidden',backgroundColor:'white'}}>

            <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
      </div>
      <div style={{float:'left', margin:10}}>
      <StarRateIcon />

            </div>
        <div style={{overflow:'hidden',backgroundColor:'white'}}>

            <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
      </div>
      <div style={{float:'left', margin:10}}>
      <StarRateIcon />

            </div>
        <div style={{overflow:'hidden',backgroundColor:'white'}}>

            <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
      </div>
      <div style={{float:'left', margin:10}}>
      <StarRateIcon />

            </div>
        <div style={{overflow:'hidden',backgroundColor:'white'}}>

            <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
      </div>
      <div style={{float:'left', margin:10}}>
      <StarRateIcon />

            </div>
        <div style={{overflow:'hidden',backgroundColor:'white'}}>

            <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={100}
      />
      </div>

            </Grid>
        </Grid>
        </Paper>
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={dd} className={classes.large}  />
        </ListItemAvatar>
        <ListItemText
          primary="His sketchup is amazing. I love his sketch."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
        <div style={{display:'flex'}}>
            <Rating name="read-only" value='5' readOnly />
            for other
        </div>
              </Typography>
              {"by Chrissy Sclater on 14 Apr, 2020"}
            </React.Fragment>
          }
        />
      </ListItem>
      <hr />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={dd} className={classes.large}  />
        </ListItemAvatar>
        <ListItemText
          primary="His sketchup is amazing. I love his sketch."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
        <div style={{display:'flex'}}>
            <Rating name="read-only" value='5' readOnly />
            for other
        </div>
              </Typography>
              {"by Chrissy Sclater on 14 Apr, 2020"}
            </React.Fragment>
          }
        />
      </ListItem>
      <hr />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={dd} className={classes.large}  />
        </ListItemAvatar>
        <ListItemText
          primary="His sketchup is amazing. I love his sketch."
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
        <div style={{display:'flex'}}>
            <Rating name="read-only" value='5' readOnly />
            for other
        </div>
              </Typography>
              {"by Chrissy Sclater on 14 Apr, 2020"}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
    </div>
    
);  
}