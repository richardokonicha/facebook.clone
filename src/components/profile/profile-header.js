import React from 'react'
import { Box, Container,Button, Divider, Avatar , Badge, SmallAvatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    header: {
        height: theme.spacing(72),
        backgroundColor: '#232323',
    },
    headerbox: {
        height: theme.spacing(50),
        backgroundColor: 'black'
    },
    divider: {
        backgroundColor: theme.palette.secondary.light
    },
    profileImage: {
        width: theme.spacing(21),
        height: theme.spacing(21)
    }
}))

const Header = () => {
    const classes = useStyles()
    const ProfileImage = "https://res.cloudinary.com/konichar/image/upload/v1617337103/projects/p1_khpp2b.jpg"
    return(
        <Box className={classes.header}>
            <Container maxWidth="lg">
                <Box  className={classes.headerbox} display="flex" justifyContent="center" alignItems="flex-end"  borderRadius={10}>
                    <Box mb={-1}>
                    {/* <Badge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        badgeContent={<SmallAvatar alt="Remy Sharp" src={ProfileImage}  />}
                    >
                        <Avatar alt="Travis Howard" src={ProfileImage}  />
                    </Badge> */}

                    {/* <Avatar alt="Richard Okonicha" src={ProfileImage} className={classes.profileImage} mb={2}></Avatar> */}
                    <Avatar src="https://res.cloudinary.com/konichar/image/upload/v1617337103/projects/p1_khpp2b.jpg" ></Avatar>
                    </Box>
                </Box>
                <Box display="flex" p={1} pt={2} lineHeight={1}  bgcolor="secondary.dark" alignItems="center" flexDirection="column" className={classes.headertitle}>
                    <Box p={1} color="text.main" lineHeight={1} fontWeight="fontWeightBold" fontSize="32px">
                        Richard Okonicha (Reechee)
                    </Box>
                    <Box fontWeight={500} color="text.main" fontSize="15px">
                        Hello world
                    </Box>
                    <Button color="primary" style={{'textTransform': 'none'}} size="small" href="#text-button">Edit</Button>
                </Box>
                <Divider className={classes.divider} ></Divider>
                hgujhgh
            </Container>
        </Box>
    )
}

export default Header