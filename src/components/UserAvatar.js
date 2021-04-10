
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: '5rem',
    width: '5rem',
  },
  card: {
    width: '15.68rem',
    padding: '3%',
    margin: '1rem',
    height: 'auto',
  },
}));

export default function UserAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>H</Avatar>
    </div>
  );
}
