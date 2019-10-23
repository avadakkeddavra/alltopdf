import * as React from "react";


const useSelect = (props) => {
  const [value, setValue] = React.useState(props.defaultValue || '');

  const handleChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return {value, handleChange, ...props};
}

export default useSelect;
