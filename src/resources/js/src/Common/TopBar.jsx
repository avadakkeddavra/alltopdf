import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from "@material-ui/styles";
import logo from "../../logo2.png";
import Avatar from "@material-ui/core/Avatar/Avatar";
import useDropdown from "../../hooks/useDropdown";
import Dropdown from "./Dropdown";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Icon from "@material-ui/core/Icon/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Notifications from "./Notifications";
import {Link} from "react-router-dom";
import {useMappedState} from "redux-react-hook";
import {useTranslation} from "react-i18next";
import useUserRole from "../../hooks/useUserRole";

const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: '10px 0px',
      backgroundColor: 'transparent !important',
      [theme.breakpoints.down(1250)]: {
        marginLeft: 25
      },
    },
    title: {
      fontWeight: 500,
      margin: 0,
      color: '#9dafff',
      fontSize: '25px',
      marginLeft: 15
    },
    subtitle:{
      fontSize: '14px',
      marginLeft: 15,
      color: '#9dafff'
    },
    appBar: {
      backgroundColor: 'transparent !important',
      color: theme.palette.secondary.main.contrastText,
      boxShadow: 'none !important',
      [theme.breakpoints.down(1250)]: {
        '& > div': {
          paddingRight: '0px !important',
        }
      },
    },
    logo: {
      width: 35,
    },
    logoItem: {
      display: 'flex',
      alignItems: 'center',
    },
    grow:{
      display: 'flex',
      justifyContent: 'space-between !important',
      alignItems: 'center',
      width: '100%',
    },
    user: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      '& h4': {
        color: theme.palette.common.accent,
        margin: 0,
        marginLeft: 10,
        textAlign: 'left',
        fontWeight: 500,
        fontSize: 14
      },
      "& p": {
        backgroundColor: theme.palette.secondary.main,
        padding: '2px 5px',
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        margin: 0,
        marginTop: '7px',
        borderRadius: 3,
        marginLeft: 10
      }
    },
    avatar: {
      margin: 10,
      color: '#fff !important',
      fontSize: 14,
      fontWeight: 600,
      backgroundColor: '#5b7aec'
    },
    list:{
      width: 150
    }
  }
});

const TopBar = ({history}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dropdown = useDropdown();
  const auth = useMappedState((state) => (state.auth))
  const {isWatcher, isAdmin} = useUserRole();

  const logout = React.useCallback(() => {
    localStorage.removeItem('token');
    history.push('/auth')
  }, [history]);
  return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.grow}>
              <div className={classes.logoItem}>
                <Link to="/">
                  <img src={logo} alt="" className={classes.logo}/>
                </Link>
              </div>

              {Object.keys(auth.user).length > 0 && <div className={classes.user}>
                <div>
                  {!isWatcher() && !isAdmin() && <Notifications/>}
                </div>
                <Avatar  className={classes.avatar}>{auth.user.name.first[0]}{auth.user.name.last[0]}</Avatar>
                <div  onClick={dropdown.handleOpen}>
                  <h4>{auth.user.name.first} {auth.user.name.last}</h4>
                  <p>{auth.user.role.name}</p>
                </div>
              </div>}
            </div>
          </Toolbar>
        </AppBar>
        {Object.keys(auth.user).length > 0 && <Dropdown {...dropdown}>
          <List className={classes.list}>
            <ListItem button onClick={() => {history.push('/profile')}}>
              <ListItemIcon>
                <Icon>account_box</Icon>
              </ListItemIcon>
              <ListItemText primary={t('profile')} />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <Icon>exit_to_app</Icon>
              </ListItemIcon>
              <ListItemText primary={t('logout')}/>
            </ListItem>
          </List>
        </Dropdown>}
      </div>
  )
}
export default TopBar;
