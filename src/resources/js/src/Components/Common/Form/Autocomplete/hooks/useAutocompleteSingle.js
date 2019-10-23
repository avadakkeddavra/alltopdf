import * as React from 'react'

const useAutocompleteSingle = (props) => {
  const [value, setValue] = React.useState(props.defaultValue)

  const handleChange = React.useCallback(name => {
    setValue(name)
  }, []);

  return {
    ...props,
    value,
    onChange: handleChange,
    setValue,
  }
}
export default useAutocompleteSingle;
