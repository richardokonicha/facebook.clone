import React from "react";
import {
    Box,
    Container,
    Button,
    Divider,
    Avatar,
    Badge,
    IconButton,
    Tabs,
    Tab,
    Toolbar,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    CameraAlt,
    Edit,
    Visibility,
    Search,
    MoreHoriz,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#232323",
    },
    headerbox: {
        height: theme.spacing(50),
        backgroundColor: "black",
        backgroundImage:
            'url("https://res.cloudinary.com/konichar/image/upload/v1617396187/projects/p2_ecmrau.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 70%",
        backgroundSize: "cover",
    },
    headerbutton: {
        color: "white",
        backgroundColor: "#ffffff2f",
        textTransform: "none",
        fontWeight: 600,
    },
    divider: {
        backgroundColor: theme.palette.secondary.light,
    },
    profileImage: {
        width: theme.spacing(21),
        height: theme.spacing(21),
        border: `4px solid #232323`,
    },
    iconButton: {
        backgroundColor: "#ffffff2f",
    },
    editbtn: {
        textTransform: "none",
        fontWeight: "600",
        fontSize: "15px",
        margin: theme.spacing(0.5),
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    tabtoolbar: {
        color: theme.palette.text.light,
    },
    tab: {
        textTransform: "none",
        fontSize: "15px",
        fontWeight: "600",
        minWidth: 0,
    },
    grow: {
        flexGrow: 1,
    },
    lefttabbtn: {
        display: "flex",
        color: theme.palette.text.light,
    },
    iconBtn: {
        backgroundColor: "#ffffff2f",
    },
}));


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


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
        {value === index && (
          <Box p={3}>
           {children}
          </Box>
        )}
      </div>
    );
  }


const Header = () => {
    const classes = useStyles();
    const ProfileImage =
        "https://res.cloudinary.com/konichar/image/upload/v1617337103/projects/p1_khpp2b.jpg";

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <Box className={classes.header}>
                <Container maxWidth="lg">
                    <Box
                        className={classes.headerbox}
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-end"
                        borderRadius={10}
                    >
                        <Box mb={-2}>
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                badgeContent={
                                    <IconButton
                                        aria-label="upload picture"
                                        component="span"
                                        className={classes.iconButton}
                                        size="small"
                                    >
                                        <CameraAlt style={{ color: "white" }} />
                                    </IconButton>
                                }
                            >
                                <Avatar
                                    alt="Richard Okonicha"
                                    src={ProfileImage}
                                    className={classes.profileImage}
                                    mb={2}
                                ></Avatar>
                            </Badge>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" p={2} mt={-8}>
                        <Button
                            variant="contained"
                            className={classes.headerbutton}
                            startIcon={<CameraAlt />}
                        >
                            Edit Cover Photo
          </Button>
                    </Box>
                    <Box
                        display="flex"
                        p={1}
                        pt={2}
                        lineHeight={1}
                        bgcolor="secondary.dark"
                        alignItems="center"
                        flexDirection="column"
                        className={classes.headertitle}
                    >
                        <Box
                            p={1}
                            color="text.main"
                            lineHeight={1}
                            fontWeight="fontWeightBold"
                            fontSize="32px"
                        >
                            Richard Okonicha (Reechee)
          </Box>
                        <Box fontWeight={500} color="text.main" fontSize="15px">
                            Hello world
          </Box>
                        <Button
                            color="primary"
                            size="small"
                            href="#text-button"
                            className={classes.editbtn}
                        >
                            Edit
          </Button>
                    </Box>
                    <Divider className={classes.divider}></Divider>
                    <Toolbar display="flex">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="profile tabs"
                            className={classes.tabtoolbar}
                            indicatorColor="primary"
                        >
                            
                            <Tab label="Posts" {...a11yProps(0)} className={classes.tab} />
                            <Tab label="About" {...a11yProps(1)} className={classes.tab} />
                            <Tab
                                label="Friends 595"
                                {...a11yProps(3)}
                                className={classes.tab}
                            />
                            <Tab label="Photos" {...a11yProps(4)} className={classes.tab} />
                            <Tab
                                label="Story Archive"
                                {...a11yProps(5)}
                                className={classes.tab}
                            />
                            <Tab label="Videos" {...a11yProps(6)} className={classes.tab} />
                            <Tab
                                label="More"
                                {...a11yProps(7)}
                                className={classes.tab}
                                icon={<Search />}
                            />
                        </Tabs>
                        <div className={classes.grow}></div>
                        <div className={classes.lefttabbtn}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                className={classes.editbtn}
                                startIcon={<Edit />}
                            >
                                Edit Profile
            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.editbtn}
                                aria-label="Visibility"
                            >
                                <Visibility />
                            </Button>
                            <Button
                                aria-label="Search"
                                variant="contained"
                                color="secondary"
                                className={classes.editbtn}
                            >
                                <Search />
                            </Button>
                            <Button
                                aria-label="Menu"
                                variant="contained"
                                color="secondary"
                                className={classes.editbtn}
                            >
                                <MoreHoriz />
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </Box>

            <Container>
                <TabPanel value={value} index={0}>
                    sfsdjljlfgss
        </TabPanel>
                <TabPanel value={value} index={1}>
                    This is index 1
        </TabPanel>
            </Container>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="Item One" />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs>
        </>
    );
};

export default Header;
