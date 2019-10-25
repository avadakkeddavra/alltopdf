import {useCallback, useState} from "react";


const useFileInput = (props) => {
  const [value, setValue] = useState('');
  const [files, setFiles] = useState([]);
  
  
  const onChange = useCallback((e) => {
    setFiles(e.target.files);
    setValue(e.target.value);
  }, []);
  
  const removeFile = useCallback((file) => {
      const newValue = value.split(',').filter((item) => item !== file.name).join(',');
      const newFiles =  Array.from(files).filter((item) => item.name !== file.name);
      setValue(newValue);
      setFiles(newFiles);
  },[value, files]);
  
  const clear = useCallback(() => {
      setValue('');
      setFiles([]);
  }, []);
  
  
  return {
      value,
      files,
      onChange,
      removeFile,
      clear,
      ...props
  }
};
export default useFileInput;
