import './style.sass'
import Row from './Row.jsx'
import CellSelection from "./CellSelection.jsx";
import {TableContext} from "./const.jsx";
import {useState} from "react";
const defaultCursor = {
    rowIndex: 0,
    columnIndex: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
}
export default function ({columns, rows}) {
    const [cursor, setCursor] = useState({...defaultCursor});

    console.log(cursor)


    const provider = {columns, rows, cursor, setCursor};
    return (
        <TableContext value={provider}>
            <div>
                <table className={'editable-table'}>

                    <thead>
                    <tr>
                        {
                            columns.map(column => (
                                <th key={column.name}>{column.name}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rows.map((row) => (
                            <Row
                                key={row.id}
                                row={row}
                            />
                        ))
                    }
                    </tbody>
                </table>
                <CellSelection/>
            </div>
        </TableContext>
    )
}