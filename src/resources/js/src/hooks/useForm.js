import useInput from "./useInput";
import useAutocompleteSingle from "../Components/Common/Form/Autocomplete/hooks/useAutocompleteSingle";
import useSelect from "./useSelect";
import useDatepicker from "./useDatepicker";

const useFormData = (item) => {
  const hooks = [useInput, useAutocompleteSingle, useSelect, useDatepicker];

  switch (item.inputType) {
    case 'select':
      return {
        type: 'select',
        data: hooks[2](item)
      };
    case 'autocomplete':
      return {
        type: 'autocomplete',
        data: hooks[1](item)
    };
    case 'datepicker':
      delete item.inputType;
      const data = hooks[3](item);
      return {
        type: 'datepicker',
        data: data
      }
    default:
      const type = item.inputType || 'input';
      const action = item.action || null;
      delete item.inputType;
      delete item.action;
      return {
        type,
        action,
        data: hooks[0](item)
      }
  }

};

const useForm = (fields) => {
  const fieldsData = fields.map(useFormData);
  const hookedFields = {};
  const values = {};

  fieldsData.forEach((item) => {
    hookedFields[item.data.name] = item.data;
    values[item.data.name] = item.type !== 'autocomplete' ? item.data.value : item.data.value ? item.data.value.value : '';
  });

  return {fields: fieldsData, hookedFields, values};
};
export default useForm;
