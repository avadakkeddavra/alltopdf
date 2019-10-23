import * as React from "react";


const useDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = React.useCallback((event) => {
    setAnchorEl(event.target);
    setOpen(true);
  },[]);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    setAnchorEl(null);
  }, []);

  const id = open ? 'simple-popover' : undefined;

  return {
    id,
    anchorEl,
    handleOpen,
    handleClose,
    open
  }
}
export default useDropdown;
