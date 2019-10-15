export default {
  parse: (path, t) => {

    console.log(t('trips'));
    const pathItems = path.split('/').filter((item) => item !== '');

    const returnArray = [];
    if(pathItems.length > 0) {
      if(pathItems[0] === 'rides') {
        returnArray.push({
          name: t('trips'),
          path: '/rides'
        });
      }
      if(pathItems[0] === 'settings') {
        returnArray.push({
          name: t('settings'),
          path: '/settings'
        });
      }
      if(pathItems[0] === 'carrier') {
        returnArray.push({
          name: t('carrier'),
          path: '/carrier'
        });
      }
      if(pathItems[0] === 'field') {
          returnArray.push({
            name: t('fields'),
            path: '/field'
          });
      }

      if(pathItems[0] === 'culture') {
        returnArray.push({
          name: t('crops'),
          path: '/culture'
        });
      }

      if(pathItems[0] === 'car') {
        returnArray.push({
          name: t('cars'),
          path: '/car'
        });
      }

      if(pathItems[0] === 'driver') {
        returnArray.push({
          name: t('drivers'),
          path: '/driver'
        });
      }


      if(pathItems[0] === 'elevator') {
        returnArray.push({
          name: t('elevators'),
          path: '/elevator'
        });
      }

      if(pathItems[0] === 'weight') {
        returnArray.push({
          name: t('currents'),
          path: '/weight'
        });
      }

      if(pathItems[0] === 'users') {
        returnArray.push({
          name: t('users'),
          path: '/users'
        });
      }

      if(pathItems[1] === 'add') {
        returnArray.push({
          name: t('create'),
          path: returnArray[0].path + '/create'
        });
      }
      if(pathItems[1] === 'edit') {
        returnArray.push({
          name: t('edit'),
          path: returnArray[0].path + '/update/' + pathItems[2]
        });
      }
    } else {
      returnArray.push({
          name: t('dashboard'),
          path: '/'
      })
    }
    return returnArray;
  }
}
