import React from "react";
import Input from "./Input";
import Autocomplete from "./Autocomplete/Autocomplete";
import Select from "./Select";
import Button from "@material-ui/core/Button/Button";
import {makeStyles} from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import Datepicker from "./Datepicker";

const useStyles = makeStyles({
  actions: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-between'
  },
  inputRow: {
    position: 'relative'
  },
  action: {
    width: 30,
    position: 'absolute',
    right: 5,
    top: 32,
    color: '#898989'
  }
});

const Form = (props) => {
  const {fields, values, onSubmit, title, className, secondAction} = props;
  const action = props.action || {name: 'Submit', variant: 'outlined', color:'primary'};
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    for(const item of fields) {
      if(item.data.error || (item.data.required && (item.data.value === '' || item.data.value === undefined))) {
        setDisabled(true);
        return;
      }
    }
    setDisabled(false);
  }, [fields, values]);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    onSubmit(e);
  }, [onSubmit]);

  return (
      <div className={className}>
        {title && <h2 className="small-title">{title}</h2>}
        <form onSubmit={handleSubmit}>
          {fields.map((item) => {
            switch (item.type) {
              case 'select':
                return (
                  <div key={item.data.label}>
                    <Select {...item.data} />
                  </div>
                );
              case 'datepicker':
                return (
                    <div key={item.data.label}>
                      <Datepicker {...item.data} />
                    </div>
                );
              case 'autocomplete':
                return (
                  <div key={item.data.label}>
                    <Autocomplete {...item.data} />
                  </div>
                );
              default:
                return (
                  <div className={classes.inputRow} key={item.data.label}>
                    <Input {...item.data} />
                    {
                      item.action && (
                        <div className={classes.action}>
                          <Icon>{item.action.icon}</Icon>
                        </div>
                      )
                    }
                  </div>
                );
            }
          })}
          <div className={classes.actions}>
            <Button
              {...action}
              type="submit"
              disabled={disabled}
              variant={disabled ? "outlined" : "contained"}
            >
              {action.name}
            </Button>
            {secondAction && <Button {...secondAction} type="button">{secondAction.name}</Button>}
          </div>
        </form>
      </div>
  );
};

export default Form;
