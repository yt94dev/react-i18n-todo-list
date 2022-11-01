import React from 'react';
import date from 'date-and-time';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomChip from '../CustomChip';
import {TodosList} from './types';

import styles from './TodosTable.module.css'

function TodosTable({todos}: TodosList) {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 640 }}>
                <Table  stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Invoice</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Due date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"><b>{row.title}</b></TableCell>
                            <TableCell align="right">
                                <CustomChip status={row.status} />
                            </TableCell>
                            <TableCell align="right"><span className={styles.dateCell}>{date.format(new Date(row.createdAt), 'DD MMM YY')}</span></TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    
);
}

export default TodosTable;