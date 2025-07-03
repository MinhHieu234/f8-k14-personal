import {useContext} from "react";
import {TableContext} from "./const.jsx";
import Cell from "./Cell.jsx";
export  default function ({row, rowIndex}) {
    const injector = useContext(TableContext)
    const {columns} = injector

    return(
        <tr>
            {
                columns.map((column,index) => {
                    return <Cell
                        key={column.name}
                        rowIndex={rowIndex}
                        columnIndex={index}
                        row={row}
                        column={column}
                    />
                })
            }
        </tr>
    )
}