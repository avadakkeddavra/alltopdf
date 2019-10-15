import React from "react";
import {makeStyles} from "@material-ui/styles";
import Chip from "@material-ui/core/Chip/Chip";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  item: {
    fontWeight: 600,
    fontSize: 10,
    textTransform: 'uppercase'
  },
  grey: {
    backgroundColor: '#595d5c',
    color: '#fff',
  },
  blue: {
    backgroundColor: '#5985ee',
    color: '#fff',
  },
  yellow: {
    backgroundColor: '#ff9653',
    color: '#fff',
  },
  green: {
    backgroundColor: '#51c26b',
    color: '#fff',
  }
})
const ItemStatus = (props) => {
  const { t } = useTranslation();
  const {type} = props;
  const classes = useStyles();
  switch (type) {
    case 'move':
      return <Chip className={classNames(classes.item, classes.grey)} label={t('taken_to_warehouse')}/>;
    case 'agro':
      return <Chip className={classNames(classes.item, classes.blue)} label={t('agronomist')}/>;
    case 'field':
      return <Chip className={classNames(classes.item, classes.yellow)} label={t('on_filed')}/>;
    case 'return':
      return <Chip className={classNames(classes.item, classes.green)} label={t('return_warehouse')}/>;
    default:
      return false;
  }
};
export default ItemStatus;
