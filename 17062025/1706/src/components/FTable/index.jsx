import { createContext, useContext } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Paper
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const TableContext = createContext(null);

const Cell = ({ row, column }) => {
    if (column.name === "action") {
        return (
            <TableCell>
                <IconButton onClick={() => console.log("Edit", row)}>
                    <EditOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => console.log("Delete", row)}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </TableCell>
        );
    }

    return <TableCell>{row[column.name] || ''}</TableCell>;
};

const Row = ({ row }) => {
    const { columns } = useContext(TableContext);

    return (
        <TableRow>
            {columns.map((col) => (
                <Cell key={`f-table-cell-${row.id}-${col.name}`} row={row} column={col} />
            ))}
        </TableRow>
    );
};

export default function FTable({ columns, rows }) {
    const provider = { columns, rows };

    return (
        <TableContext.Provider value={provider}>
            <TableContainer component={Paper}>
                <Table sx={{width: 800,margin: 'auto'}}>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col.name}>{col.text}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={`f-table-row-${row.id}`} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContext.Provider>
    );
}
