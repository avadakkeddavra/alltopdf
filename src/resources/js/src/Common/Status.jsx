import * as React from "react";
import Chip from "@material-ui/core/Chip/Chip";
import {useTranslation} from "react-i18next";

const Status = ({status_id, warehouse_id, is_marked}) => {
  const { t } = useTranslation();
  if(status_id) {
    if(status_id === 1) {
      return (
          <Chip label={t('mounted')}/>
      )
    } else {
      return (
          <Chip label={t('dismantled')}/>
      )
    }
  }
  if(is_marked) {
    return (
        <Chip label={t('marked')}/>
    )
  }

  if(warehouse_id) {
    return (
        <Chip label={t('taken_to_warehouse')}/>
    )
  }

  return (
      <Chip label="Не распределен"/>
  )
};
export default Status;
