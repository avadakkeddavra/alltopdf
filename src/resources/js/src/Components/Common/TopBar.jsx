import * as React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import useDropdown from "../../hooks/useDropdown";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    user: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 180
    },
    avatar: {
        backgroundColor: "#ff7241"
    },
    info: {
        margin: 0,
        cursor: 'pointer'
    },
    list: {
        width: 180
    }
}));

const TopBar = ({history, user}) => {

  const classes = useStyles();
  const dropDown = useDropdown();


  const logout = React.useCallback(() => {
    localStorage.removeItem('token');
    history.push('/auth/login')
  }, [history]);

  return (
      <div>
          <AppBar>
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <Icon>menu</Icon>
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                      Files
                  </Typography>
                  <div className={classes.user}>
                      <Avatar className={classes.avatar} >{user.name[0].toUpperCase()}</Avatar>
                      <p className={classes.info} onClick={dropDown.handleOpen}>{user.email}</p>
                      <Popover
                        onClose={dropDown.onClose}
                        anchorEl={dropDown.anchorEl}
                        open={dropDown.open}
                      >
                          <List component="nav" aria-label="main mailbox folders" className={classes.list}>
                              <ListItem button onClick={logout}>
                                  <ListItemIcon>
                                      <Icon>exit_to_app</Icon>
                                  </ListItemIcon>
                                  <ListItemText primary="Logout" />
                              </ListItem>
                          </List>
                      </Popover>
                  </div>

              </Toolbar>
          </AppBar>
      </div>
  )
}
export default withRouter(TopBar);
