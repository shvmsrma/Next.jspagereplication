import React from 'react';
import ima from '../images/5.jpg';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core'
import MoneyIcon from '@material-ui/icons/Money';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PeopleIcon from '@material-ui/icons/People';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import Rating from '@material-ui/lab/Rating';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import pak from '../images/pk.png'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Userdetail(){
    return(
        <Grid container style={{backgroundColor:'white'}}>
            <Grid item xs={3}>
                <img src={ima} />
            </Grid>
            <Grid xs={6}>
                <p><h2>Sa5Studio <MoneyIcon fontSize='small' style={{fill:'yellow'}} /> <CheckCircleOutlineIcon style={{fill:'blue'}} fontSize='small' /> </h2> 
               <img src={pak} /> Lahore Pakistan <PeopleIcon  fontSize='small' /> <WatchLaterIcon fontSize='small' /> 1 hour ago </p>
                <br />
                <div>
                <CheckBoxOutlineBlankSharpIcon fonrSize = 'small' />         
                <Rating name="read-only" value={5} readOnly /><CheckCircleIcon fontSize="large" style={{fill:'green'}} />
                <br/>
                723 Feedback
                </div>
                <p>Local time - 12:59 PM </p>

            </Grid>
            <Grid xs={3} style={{marginTop:10}}>
                <Button style={{backgroundColor:'green'}}>Hire Me</Button>
                <br />
                <p>Current Availability
                <br />
                Full Time : 30+hrs/week
                </p>
                <br />
                <TwitterIcon style={{fill: "#00acee"}}/>
                <FacebookIcon style={{fill: "#3b5998"}}/>
                <LinkedInIcon style={{fill: "#0e76a8"}}/>
            </Grid>
        </Grid>
    );
}