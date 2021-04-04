import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  parentCard: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.custom.borderSize,
    color: theme.palette.text.main,
  },
}));

const OnYourMind = () => {
  const classes = useStyles();

  return (
    <Card className={classes.parentCard}>
      <CardHeader
        avatar={
          <Avatar aria-label="profile picture" className={classes.avatar}>
            R
          </Avatar>
        }
      >
        ldjfd
      </CardHeader>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Daydfsds
        </Typography>
        <Typography variant="h5" component="h2">
          bejjjlent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default OnYourMind;
