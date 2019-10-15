import * as React from 'react'
import { Icon, Snackbar, SnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles({
  success: {
    backgroundColor: green[600] + "!important",
    color: '#fff !important'
  },
  error: {
    backgroundColor: '#ee625d !important',
    color: '#fff'
  },
  info: {
    backgroundColor: '#4080ee !important',
    color: '#fff'
  },
  warning: {
    backgroundColor: '#ee625d !important',
    color: '#fff !important'
  },
  default: {
    backgroundColor: '#959595 !important',
    color: '#fff'
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})


const CustomSnackbarContent = (props) => {
  const { handleClose, message, type } = props
  const classes = useStyles()
  const getType = React.useCallback(
      type => {
        switch (type) {
          case 'success':
            return classes.success
          case 'warning':
            return classes.warning
          case 'info':
            return classes.info
          case 'error':
            return classes.error
          default:
            return classes.default
        }
      },
      [classes]
  )
  return (
      <SnackbarContent
          key={message}
          className={getType(type)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
          }
          action={[
            <Icon key="close" onClick={handleClose}>
              close
            </Icon>,
          ]}
      />
  )
}

const SnackbarCustom = (props) => {
  const { open, handleClose } = props
  return (
      <Snackbar
          key={props.message}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={[
            <div key="undo">
              <Icon onClick={handleClose}>close</Icon>
            </div>
          ]}
      >
        <CustomSnackbarContent {...props} />
      </Snackbar>
  )
}
export default SnackbarCustom;
