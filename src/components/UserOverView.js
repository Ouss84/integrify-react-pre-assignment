import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardContent,
  CardActions,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: "5rem",
    width: "5rem",
  },
  card: {
    width: "15.68rem",
    padding: "3%",
    margin: "1rem",
    height: "auto",
  },
}));

function UserOverView({ name, username, website, id }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.root}>
          <div>
            <Avatar className={classes.avatar}>{name.substring(0, 1)}</Avatar>
          </div>

          <p>
            <b>{name}</b>
          </p>
          <p>@{username}</p>

          <a href={`http://${website}`}>{`http://${website}`}</a>
        </CardContent>
        <CardActions className={classes.root}>
          <Link to={`/users/${id}`}>
            <Button variant="contained" color="primary">
              More Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default UserOverView;
