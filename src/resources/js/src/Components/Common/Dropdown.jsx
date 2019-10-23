import React from "react";
import Popover from "@material-ui/core/Popover/Popover";


const Dropdown = (props) => {
  const {
    id,
    open,
    anchorEl,
    handleClose,
  } = props;
  return (
      <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
        {props.children}
      </Popover>
  )
}

export default Dropdown;
