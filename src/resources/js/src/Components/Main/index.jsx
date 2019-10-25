import React, {useEffect, useState} from 'react';
import {CircularProgress, makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import useInput from "../../hooks/useInput";
import Input from "../Common/Form/Input";
import FileInput from "../Common/Form/FileInput";
import useFileInput from "../../hooks/useFileInput";
import Button from "@material-ui/core/Button";
import FilesUpload from "./FilesUpload";
import useFileList from "./hooks/useFileList";
import FileList from "./FileList";
import Preloader from "../Common/Preloader";
import Icon from "@material-ui/core/Icon";



const useStyles = makeStyles({
    root: {
        width: '80%',
        margin: '0 auto',
        padding: 20
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    },
    nothing: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        '& h4, & span': {
            color: "#707070",
            margin: 10
        },
        '& p': {
            color: "#9a9a9a"
        }
    }
})

const Files = () => {
    const classes = useStyles();
    const data = useFileList();

    return (
        <Paper className={classes.root}>
            <FilesUpload/>
            {data.data.length > 0 && <FileList {...data}/>}
            {data.loading && <div className={classes.loading}>
                <CircularProgress/>
            </div>}
            {data.data.length === 0 && !data.loading && (
                <div className={classes.nothing}>
                    <Icon fontSize="large">insert_drive_file</Icon>
                    <h4>No data to display</h4>
                    <p>You can upload your files in the bottom input</p>
                </div>
            )}
        </Paper>
    )
};
export default Files;
