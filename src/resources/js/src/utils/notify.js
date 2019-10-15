const notify = {
  success: (message) => {
    const notifyEvent = new CustomEvent('notify', { detail: { message, type: 'success' } });
    document.dispatchEvent(notifyEvent)
  },
  warning: (message) => {
    const notifyEvent = new CustomEvent('notify', { detail: { message, type: 'warning' } });
    document.dispatchEvent(notifyEvent)
  },
  error: (message) => {
    const notifyEvent = new CustomEvent('notify', { detail: { message, type: 'error' } });
    document.dispatchEvent(notifyEvent)
  },
  sound: () => {
    const notifyEvent = new CustomEvent('soundNoty');
    document.dispatchEvent(notifyEvent)
  }
}
export default notify
