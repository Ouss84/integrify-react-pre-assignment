import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./UserDetails.css";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    color: "white",
  },
}));
function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  let history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserData(result.data);
    };

    fetchData();
  }, [id]);

  return (
    <Card className="user-details">
      <CardContent className="classes.content">
        <h3>Name: {userData.name}</h3>
        <h3>Username: {userData.username}</h3>
        <h3>Email: {userData.email}</h3>
        <h3>Phone: {userData.phone}</h3>
        <h3>Website: {userData.website}</h3>

        {userData.company && <h3>company: {userData.company.name}</h3>}
        <h3>Address: </h3>

        {userData.address && (
          <ul>
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
            history.push("/");
          }}
          variant="contained"
        >
          Back
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserDetails;
