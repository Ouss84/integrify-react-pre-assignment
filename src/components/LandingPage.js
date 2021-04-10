
import UserOverView from './UserOverView';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './LandingPage.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6% 8%',
  },
  smRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '6% 10.5%',
  },
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className="Home">
            <UserOverView />
            <UserOverView />
            <UserOverView />
            <UserOverView />
            <UserOverView />
        </div>
        
        
    );
};