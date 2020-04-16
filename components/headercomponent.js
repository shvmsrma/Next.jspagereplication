import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';
import logo from './truelancer.png'






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <AppBar position="static" style={{ background: '#24B8B4',}}>
    
        <Toolbar >
          
          <img src={logo} />
            <Typography>
              TRUELANCER
            </Typography>
          
          <Typography style={{marginLeft:300}}>
              <Button style={{backgroundColor:'green',marginBottom:5}}>Post Project</Button>
          </Typography>
          <Typography>
              <Button style={{marginBottom:5}}>Contest</Button>
          </Typography>
          <Typography>
              <ShoppingCartOutlinedIcon />
              <Button style={{marginBottom:5}}>Buy Services</Button>
          </Typography>
          <Typography>
              <WorkOutlineIcon />
              <Button style={{marginBottom:5}}>Find Jobs</Button>
          </Typography>
          <Typography>
              <PersonOutlineOutlinedIcon />
              <Button style={{marginBottom:5}}>Find Freelancers</Button>
          </Typography>
          <Typography className={classes.btn}>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>

          </Typography>
        </Toolbar>
      </AppBar>
      
          <Toolbar style={{backgroundColor:'white',marginLeft:20}}>
              <Typography>
                  <Button>
                    OverView
                  </Button>
              </Typography>
              <Typography>
                  <Button>
                      PortFolio
                  </Button>
              </Typography>
              <Typography>
                  <Button>
                      Services
                  </Button>
              </Typography>
              <Typography>
                  <Button>
                      Project History
                  </Button>
              </Typography>
              <Typography>
                  <Button>
                      Endorsements
                  </Button>
              </Typography>
          </Toolbar>
          
    </div>
  );
}