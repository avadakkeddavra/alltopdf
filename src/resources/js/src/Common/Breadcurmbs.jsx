import React from "react";
import {Breadcrumbs as MUIBreadcrumbs} from '@material-ui/core';
import builder from "../../utils/breadcumbs";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  root: {
    margin: 0,
    marginBottom: 15,
    '& a, & span': {
      textDecoration: 'none',
      color: '#434349',
      display: 'inline-block',
      marginTop: 5
    },
  },
  main: {
    marginTop: '0px !important',
    fontWeight: '500',
    fontSize: '1.2rem !important',
    textTransform: 'capitalize !important',
  },
  current: {
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 500
  }
});

const Breadcrumbs = (props) => {
  const { t } = useTranslation();
  const {
    pathname
  } = props;
  const classes = useStyles();
  const breadcrumbs = builder.parse(pathname, t);

  return (
      <MUIBreadcrumbs separator="›" aria-label="Breadcrumb" className={classes.root}>
        {
          breadcrumbs && breadcrumbs.map((item, index) => {
            return (
              (index !== breadcrumbs.length - 1) ?
                <div key={index}>
                  <Link color="primary" to={item.path} className={index === 0 ? classes.main : ''}>
                    {item.name}
                  </Link>
                </div> :
                <span key={index} className={classNames(classes.current, {
                  [classes.main]: breadcrumbs.length === 1
                })}>{item.name}</span>
            )
          })
        }
      </MUIBreadcrumbs>
  )
};
export default Breadcrumbs;
