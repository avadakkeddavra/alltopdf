import React from "react";
import { rules } from "../utils/validation";

const useInput = (props) => {
  const {rule, converter, onChangeHook} = props;
  const [value, setValue] = React.useState(props.defaultValue || '');
  const [error, setError] = React.useState(false);

  const onChange = React.useCallback((e) => {
    if(rule) {
      const isError = rules[rule](e.target.value);
      console.log(isError);
      setError(isError);
    }

    const newValue = converter
      ? converter(e.target.value, value)
      : e.target.value;

    if(onChangeHook) {
      onChangeHook(newValue);
    };

    setValue(newValue);
  }, [rule, converter, onChangeHook, value]);

  delete props.defaultValue;
  delete props.onChangeHook;
  delete props.rule;
  delete props.converter;
  return {
    ...props,
    error,
    onChange,
    value,
    setValue
  }
}
export default useInput;
