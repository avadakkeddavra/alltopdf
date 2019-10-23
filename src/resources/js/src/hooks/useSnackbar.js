import * as React from 'react'

const useSnackbar = () => {
  const [open, toggleOpen] = React.useState(false)
  const [type, setType] = React.useState('')
  const [message, setMessage] = React.useState('')
  const handleClose = React.useCallback(() => {
    toggleOpen(false)
  }, [])
  const handleOpen = React.useCallback((message, type) => {
    toggleOpen(true)
    setMessage(message)
    setType(type)
  }, [])

  const handleOpenFromEvent = React.useCallback(
      (options) => {
        const message = options.detail ? options.detail.message : '';
        const type = options.detail ? options.detail.type : 'default';
        handleOpen(message, type)
      },
      [handleOpen]
  )

  return { open, handleClose, handleOpen, message, type, handleOpenFromEvent }
};
export default useSnackbar
