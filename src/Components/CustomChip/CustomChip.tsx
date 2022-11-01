import React from 'react';
import Chip from '@mui/material/Chip';

interface ICustomChip {
    status: "finished" | "overdue" | "in progress" | "draft";
}

function CustomChip({status}: ICustomChip){
    switch (status) {
        case 'overdue':
            return(<Chip  label={status}  color="error" />);
        
        case 'finished':
            return(<Chip  label={status}  color="success" />);

        case 'in progress':
            return(<Chip label={status} color="warning" />);

        case 'draft':
            return(<Chip label={status} />);

        default:
            return(<Chip  label={status} />);
    };



}

export default CustomChip;