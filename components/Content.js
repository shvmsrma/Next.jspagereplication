
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Cards from './cards'
import abc from './abc.js'
import PortFolios from './portfolios'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:20,
        marginRight:50,
      flexGrow: 1,
      backgroundColor:'white',
    },
    head:{
        float:'right'
    }
  }));


export default function Content() {
    const classes = useStyles();


return(

    <div className={classes.root}>
        <Typography className={classes.head}>
        <h3>About Me</h3>
        <hr />
        <p>I am an Architect Having 8 years of experience in field .</p> 
        <p>I have already complied some live projects </p>
        <p>Planning ,Interior, Exterior ,Building Construction & 3D views </p>
        <p>ARCHITECTURAL & INTERIOR DESIGN SERVICES</p>
        <p>> Design of built up spaces</p>
        <p>>Land....</p>
        <a style={{float:'right'}} href="#"> Show more</a>
        </Typography>
        <Typography style={{paddingTop:10}}>
            <h3>My Expertise</h3>
            <hr />
            <div className={classes.ships}>
            <Chip size="small" label="PHOTOSHOP" />
            <Chip size="small" label="3D MODELLING" />
            <Chip size="small" label="ARCHITECTURAL DESIGN" />
            <Chip size="small" label="ADOBE PHOTOSHOP" />
            <Chip size="small" label="AUTOCAD" />
            <Chip size="small" label="AUTODESK 3D STUDIO MAX" />
            <Chip size="small" label="AUTODESK REVIT" />
            <Chip size="small" label="SKETCHUP" />
            <Chip size="small" label="MICROSOFT OFFICE" />
            <Chip size="small" label="AUTODESK REVIT ARCHITECTURE" />

            </div>
        </Typography>
        <Typography>
            <h3>Explore & Try my Services</h3>
            <hr />
            <Cards />
        </Typography>
        <Typography>
        <PortFolios />

        </Typography>
    </div>
);




}