import logo from './../logo2.png';

const defaultOptions = {
  image: logo,
  body: 'New notification was send'
};
const useNotifications = (options = defaultOptions) => {

  return new Notification('MHP Logistic', options);
}

export default useNotifications;
