import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import useInput from "../../hooks/useInput";
import Input from "../Common/Form/Input";
import FileInput from "../Common/Form/FileInput";
import useFileInput from "../../hooks/useFileInput";
import Button from "@material-ui/core/Button";
import useFilesUpload from "./hooks/useFilesUpload";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";


const ALLOWED_TYPES = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/x-msexcel',
    'application/excel',
    'application/vnd.ms-excel',
    'application/x-excel',
    'application/mspowerpoint',
    'application/powerpoint',
    'application/vnd.ms-powerpoint',
    'application/x-mspowerpoint'
];
const useStyles = makeStyles({
    uploadFiles: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const FilesUpload = () => {
    const classes = useStyles();
    const {
        disabled,
        filesInput,
        upload,
    } = useFilesUpload();
    const renderList = useCallback(() => {
       return Array.from(filesInput.files).map((item) => {
            return (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Icon>insert_drive_file</Icon>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <Icon onClick={() => filesInput.removeFile(item)}>delete</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        })
    },[filesInput]);
    return (
        <div>
            <div className={classes.uploadFiles}>
                <FileInput {...filesInput}/>
                <Button variant="contained" color="primary" disabled={disabled} onClick={upload}>Upload</Button>
            </div>
            <List dense>
                {
                    filesInput.files.length > 0 && renderList()
                }
            </List>
        </div>
    )
};
export default FilesUpload;
