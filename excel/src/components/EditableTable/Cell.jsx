import {useContext, useRef} from "react";
import {TableContext} from "./const.jsx";

export default function ({row, column}) {

    const injector = useContext(TableContext)
    const {cursor, setCursor} = injector;


    const cellRef = useRef(null)


    const cell = row[column.name]


    const onClick = () => {
        console.log('cellRef: ', cellRef.current)

        if (cellRef.current) {

            const top = cellRef.current.offsetTop;
            const left = cellRef.current.offsetLeft;
            const width = cellRef.current.offsetWidth;
            const height = cellRef.current.offsetHeight;
            setCursor({
                ...cursor,
                top: top,
                left: left,
                width: width,
                height: height,
            })
        }
    }

    return (
        <td
            onClick={onClick}
            ref={cellRef}
        >
            {cell}
        </td>
    )
}