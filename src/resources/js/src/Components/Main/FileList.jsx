import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableFooter from "@material-ui/core/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import {makeStyles} from "@material-ui/styles";
import File from "./File";

const useStyles = makeStyles(theme => {
    return {
        root: {
            '& td': {
                padding: '15px 15px'
            }
        },
        modal: {
            minWidth: 600,
            height: '80%'
        },
        column: {
            fontWeight: '500',
            color: '#333'
        },
        icon: {
            display: 'inline-block',
            lineHeight: '38px !important',
            cursor: 'pointer'
        }
    }
})

const FileList = (props) => {
    const {data, filters, total, handleChangePage, handleChangeRowsPerPage} = props;
    const classes = useStyles();
    
    const rows = React.useCallback(() => {
        const arr = Array(Math.floor(total / 5 / filters.page)).fill(null).map((item, index) => {return (index + 1) * 5});
        return arr;
    }, [total, filters.page]);
    
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.column}>Name</TableCell>
                        <TableCell className={classes.column}>Type</TableCell>
                        <TableCell className={classes.column}>Path</TableCell>
                        <TableCell className={classes.column}>Path to pdf</TableCell>
                        <TableCell className={classes.column}>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data && data.length > 0 && data.map((item) => {
                            return (
                                <File key={item.id} {...item}/>
                            )
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={rows()}
                            colSpan={6}
                            count={total}
                            rowsPerPage={filters.rowsPerPage}
                            page={filters.page - 1}
                            SelectProps={{
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            labelRowsPerPage={''}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
};

export default FileList;
