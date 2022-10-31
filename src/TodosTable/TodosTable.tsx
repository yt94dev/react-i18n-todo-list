import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TodoItem {
    createdAt: Date,
    id: number,
    status: "finished" | "overdue" | "in progress";
    text: string,
    title: string,
}

interface TodosList {
    todos: Array<TodoItem>,
}

function TodosTable({todos}: TodosList) {
    console.log(todos);
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <TableCell component="th" scope="row">{row.title}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    </TableContainer>
);
}

export default TodosTable;