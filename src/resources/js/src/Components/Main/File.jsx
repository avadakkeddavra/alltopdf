import * as React from "react";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Icon from '@material-ui/core/Icon';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    row: {
        cursor: 'pointer',
        transition: '0.3s background-color',
        "&:hover": {
            backgroundColor: '#f6f6f6'
        }
    },
    button: {
        "& span": {
            fontSize: 18
        }
    }
});
const File = (props) => {
    const {
        name,
        type,
        path,
        pdfPath,
        updated_at
    } = props;
    const classes = useStyles();
    
    return (
        <TableRow className={classes.row}>
            <TableCell>{name}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{path}</TableCell>
            <TableCell>{pdfPath}</TableCell>
            <TableCell>{updated_at}</TableCell>
        </TableRow>
    )
};

export default File;
