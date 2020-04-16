import React from 'react';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemAvatar,ListItemText,Typography} from '@material-ui/core'
import im1 from '../images/1.jpg'
import im2 from '../images/2.jpg'
import im3 from '../images/3.jpg'
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      }
    
  }));
  
export default function Endorsements(){

    const classes = useStyles();
return(
    <div>
        <h3>My Endorsements</h3>
        <hr />
        <div >
        <Button style={{backgroundColor:'#55BDAF', display:'table',margin:'0 auto'}}>Endorse Sohail</Button>
        </div>
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={im2} className={classes.large}/>
        </ListItemAvatar>
        <ListItemText
          primary="HI YOU PORTFOLIO WAS NICE"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                by Md on 03 Mar, 2020
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={im3} className={classes.large}  />
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
              </Typography>
              {"by Jack on 21 Dec, 2019"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={im1} className={classes.large} />
        </ListItemAvatar>
        <ListItemText
          primary="Hi Sohail, your Portfolio is incredible, i like that. Sohail em depressed, No one is viewing my Service, please help :'( from a Pakistani. www.truelancer(dot)com/freelance-service/get-your-video-edited-color-corrected-stabilized-shaking-get-promotional-videos-169635 Replacce (dot) with . thanks"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {" by Hamdan on 26 Oct, 2019"}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      <Button style={{backgroundColor:'#55BDAF', display:'table',margin:'0 auto'}}>Show More</Button>
    </div>
);
}