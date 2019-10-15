import {useCallback, useState} from "react";


const useDatepicker = (props) => {
  const [value, setValue] = useState(props.defaultValue || null);
  const onChange = useCallback((date) => {
    setValue(date);
  }, []);
  delete props.defaultValue;
  return {
    ...props,
    onChange,
    value,
    setValue
  }
};

export default useDatepicker;
