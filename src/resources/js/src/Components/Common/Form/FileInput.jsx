import * as React from 'react';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useCallback} from "react";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        borderBottom: '2px solid #eee',
        '&:before': {
            content: "attr(title)",
            textTransform: 'capitalize',
            fontSize: 12,
            color: '#4c85ee',
            lineHeight: 'normal',
            position: 'absolute',
            top: '-10px',
            left: 0
        }
    },
    input: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%',
        height: '100%'
    },
    values: {
        width: '100%',
        lineHeight: '45px',
        minHeight: '45px',
        display: 'inline-block',
        position: 'relative',
    }
})

const FileInput = (props) => {
    const classes = useStyles();
    const inputData = {
        onChange: props.onChange,
        className: classes.input,
        value: props.value,
        multiple: props.multiple,
        accept: props.accept
    };
    console.log(props.accept)
    const renderFileNames = useCallback(() => {
        const names = [];
        for(let item of props.files) {
            names.push(item.name);
        }
        return names.join(', ');
    }, [props.files]);
    return (
        <div className={classes.root} title={props.label + `(${props.files.length})`}>
            <Icon color="primary">insert_drive_file</Icon>
            <span className={classes.values}>
                {renderFileNames()}
            </span>
            <input type="file" {...inputData} accept={props.accept}/>
        </div>
    )
};

export default FileInput;

