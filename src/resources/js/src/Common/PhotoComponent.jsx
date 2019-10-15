import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Popover } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    itemSmall: {
      userSelect: 'none',
      margin: '10px',
      minWidth: 150,
    },
    itemLarge: {
      userSelect: 'none',
      minWidth: 150,
    },
  }
});

const PhotoComponent = ({photos}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  if (!Array.isArray(photos)) return null;

  return (
    <>
      {photos.map((photo, idx) => {
        return (
          <React.Fragment key={idx}>
            <img
              onClick={handleClick}
              className={classes.itemSmall}
              alt=""
              width='100px'
              src={`${process.env.REACT_APP_BASE_URL}/${photo}`}
            />
            <Popover
              id={idx}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
            >
              <img
                onClick={handleClick}
                className={classes.itemLarge}
                alt=""
                width='500px'
                src={`${process.env.REACT_APP_BASE_URL}/${photo}`}
              />
            </Popover>
          </React.Fragment>
        );
      })}
    </>
  )
};

export default PhotoComponent;
