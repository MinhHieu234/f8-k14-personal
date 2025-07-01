
import './style.sass'
import Row from "./Row.jsx";
import { TableContext } from "./const.jsx";
import {useState} from "react";
import CellSelection from "./CellSelection.jsx";
import CellInput from "./CellInput.jsx";


const defaultCursors = {
    rowIndex:0,
    columnIndex:0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    isEditing: false
}

export default function({columns,rows,columnIndex,rowIndex, onInput}) {
    const [cursor,setCursor] = useState({...defaultCursors})


    const providers = {
        columns,rows,cursor,setCursor,rowIndex,columnIndex,onInput
    };
    return(
        <TableContext value={providers}>
            <div style={{position: 'relative'}}>
                <table className={'editable-table'}>
                    <thead>
                    <tr>
                        {
                            columns.map(column => {
                                return <th contentEditable={true} key={column.name} style={{width:column.width}}>{column.name}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rows.map((row, index) => {
                            return <Row
                                key={row.product}
                                rowIndex={index}
                                row={row}
                            />
                        })
                    }
                    </tbody>
                </table>
                <CellInput/>
                <CellSelection/>
            </div>
        </TableContext>

    )
}