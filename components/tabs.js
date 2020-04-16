import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  table:{
      minWidth:340
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{marginTop:20,width:320}}>
        <Tabs style={{float:'left',backgroundColor:'white'}}
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab style={{color:'black'}} label="Seller Stats" href="/drafts" {...a11yProps(0)} />
          <LinkTab style={{color:'black'}} label="Buyer Stats" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
        <h2 style={{textAlign:'center'}}>$20/hr</h2>

      <Table className={classes.table} aria-label="simple table">
          <TableRow>
            <TableCell>Total Earnings</TableCell>
            <TableCell align="right">741</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Projects Completed</TableCell>
            <TableCell align="right">1</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Services Delivered</TableCell>
            <TableCell align="right">4</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Buyer worked with</TableCell>
            <TableCell align="right">$23310</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Feedbacks</TableCell>
            <TableCell align="right">97%</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Followers</TableCell>
            <TableCell align="right">259</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Total Refund</TableCell>
            <TableCell align="right">3</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Contest Completed</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
    </Table>
    </TableContainer>
    <p style={{textAlign:'center'}}>Member Since ,25 Sep,2017</p>

      </TabPanel>
      <TabPanel value={value} index={1}>

      <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="simple table">
          <TableRow>
            <TableCell>Total Spent</TableCell>
            <TableCell align="right">$0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Projects Posted</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Projects Paid</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Services Purchased</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Sellers worked with</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Feedbacks</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Followers</TableCell>
            <TableCell align="right">259</TableCell>           
          </TableRow>
          <TableRow>
            <TableCell>Contest Paid</TableCell>
            <TableCell align="right">0</TableCell>           
          </TableRow>
    </Table>
    </TableContainer>

      </TabPanel>
      
    </div>
  );
}
