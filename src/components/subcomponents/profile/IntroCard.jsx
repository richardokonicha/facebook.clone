import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import {
  School,
  BusinessCenter,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  parentCard: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.custom.borderSize,
    color: theme.palette.text.main,
  },
  cardAvatar: {
    minWidth: theme.spacing(0),
    marginRight: theme.spacing(1),
  },
  cardButton: {
    width: "100%",
    textTransform: "none!important",
    fontWeight: 700,
    color: theme.palette.textPrimary,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.custom.borderSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const IntroCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.parentCard}>
      <CardContent>
        <Box
          variant="h5"
          component="h2"
          color="textPrimary"
          fontSize={24}
          fontWeight={700}
          mt={0.5}
          mb={0}
        >
          Intro
        </Box>

        <List bgcolor="primary">
          <ListItem disableGutters>
            <ListItemAvatar className={classes.cardAvatar}>
              <BusinessCenter size="large"></BusinessCenter>
            </ListItemAvatar>
            <ListItemText primary="Works at Freelancer"></ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar className={classes.cardAvatar}>
              <BusinessCenter size="large"></BusinessCenter>
            </ListItemAvatar>
            <ListItemText primary="Self-Employed"></ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar className={classes.cardAvatar}>
              <School size="large"></School>
            </ListItemAvatar>
            <ListItemText primary="Studied at University of Nigeria, Nsukka"></ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar className={classes.cardAvatar}>
              <School size="large"></School>
            </ListItemAvatar>
            <ListItemText primary="From Abuja, Nigeria"></ListItemText>
          </ListItem>
          <ListItem disableGutters button component="a">
            <ListItemAvatar className={classes.cardAvatar}>
              <Instagram size="large"></Instagram>
            </ListItemAvatar>
            <ListItemText
              href="instagram.com"
              component="a"
              primary="r.e.e.c.h.e.e"
            ></ListItemText>
          </ListItem>
          <ListItem disableGutters button component="a">
            <ListItemAvatar className={classes.cardAvatar}>
              <LinkedIn size="large"></LinkedIn>
            </ListItemAvatar>
            <ListItemText
              component="a"
              href="https://www.linkedin.com/in/richardokonicha/"
              primary="https://www.linkedin.com/in/richardokonicha/"
            ></ListItemText>
          </ListItem>
        </List>
        <Box>
          <Button
            variant="contained"
            size="large"
            className={classes.cardButton}
          >
            Edit Details
          </Button>

          <Button
            variant="contained"
            size="large"
            className={classes.cardButton}
          >
            Edit Hobbies
          </Button>

          <Button
            variant="contained"
            size="large"
            className={classes.cardButton}
          >
            Edit Featured
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IntroCard;
