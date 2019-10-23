import * as React from 'react'

const TopBar = ({history}) => {


  const logout = React.useCallback(() => {
    localStorage.removeItem('token');
    history.push('/auth')
  }, [history]);

  return (
      <div>
          <h1>Pdfer</h1>
      </div>
  )
}
export default TopBar;
