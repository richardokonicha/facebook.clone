import React from "react";
import { Box, Container } from "@material-ui/core";
import ProfilePost from "./ProfilePost";
import ProfileAbout from "./ProfileAbout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.darker,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const ProfileBody = (props) => {
  const { value } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <Container >
      <TabPanel value={value} index={0}>
        <ProfilePost />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileAbout />
      </TabPanel>
    </Container>
    </div>
  );
};

export default ProfileBody;
