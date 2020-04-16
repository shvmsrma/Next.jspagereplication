import Header from '../components/headercomponent'
import NavTabs from '../components/tabs'
import Content from '../components/Content'
import { makeStyles } from '@material-ui/core/styles';
import Smalls from '../components/small'
import Endorsements from '../components/endorsements';
import Footer1 from '../components/footer1';
import Footer2 from '../components/footer2'
import ProjectHistory from '../components/projecthistory'
import UserDetail from '../components/userdetails'

const useStyles = makeStyles((theme) => ({
    
  }));
export default function Index() {
    const classes = useStyles();

    return (
    <div >
        <Header />

        <div style={{backgroundColor:'#F4F6F7'}}>
        <Smalls />
        <UserDetail />

        <div style={{float:'left', margin:10}}>
            <NavTabs />
        </div>
        <div style={{overflow:'hidden', margin:10,backgroundColor:'white'}}>
        <Content />
        <ProjectHistory />
        <Endorsements />
        </div>
        <Footer1 />
        <div style={{marginTop:10,backgroundColor:'black'}}>
        <Footer2 />
        </div>
        </div>
    </div>
    );
  }