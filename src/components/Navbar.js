import React from 'react'
import logo from '../images/NGTeco Logo.jpg'
import profilelogo from '../images/Group 5750.png'
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../utility/SearchAppBar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root:
  {
    margin: theme.spacing(1),
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Zteco logo" />
        <a href="_#">Test Project</a>
      </div>

      <div className="search">
        <SearchAppBar />
      </div>
          <div className="search2">
        <div className={classes.root}>
          <Badge badgeContent={21} color="secondary"  >
            <NotificationsIcon />
          </Badge>
        </div>
      </div>

      <div className="last">
        <div className="image-profile">
          <img src={profilelogo} alt="profile-logo" />
        </div>
        <div className="name-profile">
          <p>Hi, Sarah Cody</p>
        </div>
        <div className="dropdown">
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  )
}
export default Navbar
