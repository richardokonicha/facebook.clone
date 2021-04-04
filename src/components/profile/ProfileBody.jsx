import React from "react";
import {
  Box,
  Container,
} from "@material-ui/core";
import ProfilePost from '../subcomponents/ProfilePost'
import ProfileAbout from '../subcomponents/ProfileAbout'


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
  return (
    <Container>
      <TabPanel value={value} index={0}>
        <ProfilePost/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileAbout/>
      </TabPanel>
    </Container>
  );
};

export default ProfileBody