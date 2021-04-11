import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Button} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Bounce from 'react-activity/lib/Bounce';
import './UserDetails.css'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '25%',
    margin: '4% 40%',
    padding: '2% 0',
    lineHeight: 2,
  },

  content: {
    margin: '0 12%',
  },

  actions: {
    display: 'flex',
    justifyContent: 'center',
  },


  button: {
    backgroundColor: 'blue',
    color: 'white',
  },
}));
const UserDetails=(props)=> {

    const { id } = useParams();
    const [userData, setUserData] = useState({});
    let history = useHistory();
    const theme = useTheme();
    const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUserData(result.data);
    };

    fetchData();
  }, [id]);

  

  return userData ? (
    <Card className="user-details">
      <CardContent className ="classes.content">
        <ul >
          <li>name: {userData.name}</li>
          <li>username: {userData.username}</li>
          <li>email: {userData.email}</li>
          <li>phone: {userData.phone}</li>
          <li>website: {userData.website}</li>

          {userData.company && <li>company: {userData.company.name}</li>}
          <li>address: </li>
        </ul>
        {userData.address && (
          <ul className="list">
            <li>street: {userData.address.street}</li>
            <li>suite: {userData.address.suite}</li>
            <li>city: {userData.address.city}</li>
            <li>zipcode: {userData.address.zipcode}</li>
          </ul>
        )}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          className={classes.button}
          onClick={() => {
            history.push('/');
          }}
          variant="contained"
        >
          Back
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Bounce />
  );
};

export default UserDetails;

