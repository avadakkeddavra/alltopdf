import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/styles'
import * as React from 'react'
import { createStyles, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText'
import classNames from 'classnames'
import {
  carrierIcon,
  carsIcon, cogIcon,
  cultureIcon,
  elevatorIcon,
  fieldIcon,
  rideIcon, truckIcon,
  usersIcon, weightIcon
} from "../../svg";
import useUserRole from "../../hooks/useUserRole";
import {useTranslation} from "react-i18next";

const styles = createStyles(theme => ({
  root: {
    [theme.breakpoints.down(1250)]: {
      width: 73,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      zIndex: 1000,
      backgroundColor: '#1e1e2d'
    },
    transition: '0.3s',
    width: 255,
    height: 'calc(100vh - 120px)',
    boxSizing: 'border-box',
    padding: '15px',
    backgroundColor: "#fff",
    borderRadius: '3px',
    boxShadow: '0 0 28px 0 rgba(82,63,105,.08)'
  },
  activeMenu: {
    [theme.breakpoints.down(1250)]: {
      width: 255,
      '& .MuiListItemText-root': {
        opacity: 1
      }
    },
  },
  title: {
    textAlign: 'left',
    margin: '0px 0px 20px 0px',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '0px 0px 0px 15px',
    color: '#9e95c3',
    fontWeight: 400,
    [theme.breakpoints.down(1250)]: {
      display: 'none'
    },
  },
  divider: {
    margin: '10px 0px',
    backgroundColor: '#e6e6e6',
    [theme.breakpoints.down(1250)]: {
      backgroundColor: '#3e3e4b',
    },
  },
  list: {},
  active: {
    color: `${theme.palette.primary.main} !important`,
  },
  fullList: {
    width: 'auto',
  },
  action: {
    fontSize: '18px !important',
    color: '#4080EE',
    fontWeight: 500,
    borderRadius: '60%',
    marginLeft: 20,
    [theme.breakpoints.down(1250)]:{
      display: 'none'
    }
  },
  iconActive: {
    color: theme.palette.primary.main + ' !important',
    "& svg": {
      fill: '#4080EE'
    }
  },
  icon: {
    width: 30,
    color: '#cacad2',
    "& svg": {
      width: '20px !important',
      height: '20px !important'
    },
    [theme.breakpoints.down(1250)]: {
      color: '#a2a3b7'
    },
  },
  link:{
    display: 'flex',
    width: '100%',
    justifyContent: 'justify-between',
    color: '#5d5b6f',
    padding: '7px 15px',
    [theme.breakpoints.down(1250)]: {
      padding: '7px 5px',
    },
  },
  linkItemText: {
    transition: '0.3s opacity',
    [theme.breakpoints.down(1250)]: {
      opacity: 0,
      color: '#a2a3b7 !important'
    },
  },
  menuItem: {
    display: 'flex',
    padding: '0',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '3px',
    paddingRight: '10px',
    color: '#5d5b6f',
    [theme.breakpoints.down(1250)]: {
      color: '#a2a3b7 !important'
    },
    '& > a': {
      textDecoration: 'none',
    },
    '& div > span': {
      fontSize: '13px',
      fontWeight: 500,
      [theme.breakpoints.down(1250)]: {
        color: '#a2a3b7 !important'
      },
    }
  },
  nested: {
    paddingLeft: 24,
  },
  menuBtn: {
    display: 'none !important',
    width: 30,
    color: '#a4a4aa',
    marginBottom: 30,
    [theme.breakpoints.down(1250)]: {
      display: 'block !important',
    },
  }
}));


const Sidebar = (props) => {
  const { t } = useTranslation();
  const { classes, pathname} = props;
  const role = useUserRole();

  const menu = [
    {
      title: t('trips'),
      link: '/rides',
      icon: rideIcon,
      isVisible: true,
      sectionTitle: 'Головне меню',
    },
    {
      title: t('fields'),
      link: '/field',
      icon: fieldIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/field/add'
      }
    },
    {
      title: t('crops'),
      link: '/culture',
      icon: cultureIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/culture/add'
      }
    },
    {
      title: t('carrier'),
      link: '/carrier',
      icon: carrierIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/carrier/add'
      }
    },
    {
      title: t('cars'),
      link: '/car',
      icon: truckIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/car/add'
      }
    },
    {
      title: t('drivers'),
      link: '/driver',
      icon: carsIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/driver/add'
      }
    },
    {
      title: t('elevators'),
      link: '/elevator',
      icon: elevatorIcon,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/elevator/add'
      }
    },
    {
      title: t('currents'),
      link: '/weight',
      icon: weightIcon,
      divider: true,
      isVisible: true,
      action: role.isAdmin() && {
        link: '/weight/add'
      }
    },
    {
      title: t('users'),
      link: '/users',
      icon: usersIcon,
      divider: true,
      isVisible: !role.isDispatcher(),
      action:  role.isAdmin() && {
        link: '/users/add'
      }
    },
    {
      title: t('settings'),
      link: '/settings',
      icon: cogIcon,
      isVisible: true,
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleMenuOpen = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const goTo = React.useCallback((link) => {
    if(open === true) {
      setOpen(false);
    }
  }, [open])

  function renderMenuItems(items) {
    return (
      <div className={classNames(classes.root, {
        [classes.activeMenu]: open
      })} key="menu-1">
        <Icon className={classes.menuBtn} onClick={handleMenuOpen}>{open ? 'close' : 'menu'}</Icon>
        <List style={{marginTop: 10}}>
          {items.map((menuItem, index) => {
            if (typeof menuItem.auth !== 'undefined' && !menuItem.auth) return null;
            if (!menuItem.isVisible) return null;

            return (
              <div key={index} >
                {menuItem.sectionTitle && <h5 className={classes.title}>{menuItem.sectionTitle}</h5>}
                <ListItem
                    button
                    className={classNames(classes.menuItem, {
                      [classes.active]: menuItem.link === pathname,
                    })}
                >
                <Link to={menuItem.link} className={classes.link} onClick={goTo}>

                    <Icon className={classNames(classes.icon, {
                      [classes.iconActive]: menuItem.link === pathname
                    })}>{menuItem.icon}</Icon>
                    <ListItemText primary={menuItem.title} className={classes.linkItemText}/>
                  </Link>
                  {menuItem.action && (
                      <Link to={menuItem.action.link} className={classes.action}>
                        <Icon>add</Icon>
                      </Link>
                  )}
                </ListItem>
                {menuItem.divider && <Divider className={classes.divider}/>}
              </div>
            )
          })}
        </List>
      </div>
    )
  }
  return (
      <div className={classes.list}>
        {renderMenuItems(menu)}
      </div>
  )
}
export default withStyles(styles)(Sidebar)
