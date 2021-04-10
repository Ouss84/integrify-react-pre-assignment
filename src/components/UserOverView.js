
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Typography, CardContent, CardActions } from '@material-ui/core';

import UserAvatar from './UserAvatar'

const useStyles = makeStyles({
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
});

export default function UserOverView() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <UserAvatar />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User Full name
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          User's twitter
        </Typography>
        <Typography variant="body2" component="p">
          User's Website
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
              More Details
            </Button>
      </CardActions>
    </Card>
  );
}