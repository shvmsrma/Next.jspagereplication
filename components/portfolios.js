import image1 from '../images/image1.jpg'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles({
    image1: {
      width:100
    },
    paper1:{
      overflow:'hidden'
    }
    
  });

export default function Portfolios(){
    const classes = useStyles();

    return(
        <Grid container>
          <Grid item xs={4}>
          
          </Grid>
        </Grid>
        
    );
}