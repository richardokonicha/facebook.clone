import React from "react";
import { Grid } from "@material-ui/core";
import OnYourMind from "../subcomponents/profile/OnYourMind";
import IntroCard from "../subcomponents/profile/IntroCard";

const ProfilePost = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <IntroCard></IntroCard>
      </Grid>
      <Grid item xs={12} sm={7}>
        <OnYourMind></OnYourMind>
      </Grid>
    </Grid>
  );
};

export default ProfilePost;
