import {useContext, useEffect, useRef, useState} from "react";
import {TableContext} from "./const.jsx";
import './style.sass'
export default function () {
    const injector = useContext(TableContext);

    const {cursor, setCursor,rows, columns, onInput} = injector

    const cellInputRef = useRef(null);

    const inputRef = useRef(null);

    const colName = columns[cursor.columnIndex].name;
    const curRow = rows[cursor.rowIndex];
    const [inputValue,setInputValue] = useState(curRow[colName])

    const onDoubleClick = () => {
        setCursor({...cursor, isEditing: true});

    }

    const onKeyDown = (e) => {
        if(!cursor.isEditing) {
            setCursor({...cursor, isEditing: true});
            setInputValue(`${inputValue}${e.key}`);
        }

        setTimeout(() => {
            inputRef.current.focus();
        })
        if (e.key === 'Enter') {
            e.preventDefault();
            setCursor({...cursor, isEditing: false});
            rows[cursor.rowIndex][colName] = inputValue;

            if (typeof onInput === 'function') {
                onInput({
                    rowIndex: cursor.rowIndex,
                    columnIndex: cursor.columnIndex,
                    value: inputValue
                });
            }
        }
    }

    const onBlur = () => {
        setCursor({...cursor, isEditing: false});
        rows[cursor.rowIndex][colName] = inputValue;
    }
    useEffect(() => {
        setInputValue(curRow[colName]);
        cellInputRef.current.focus()
    }, [cursor.rowIndex, cursor.columnIndex, cursor.width, cursor.height])

    return (
        <div
            ref={cellInputRef}
            tabIndex={1}
            className={'cell-input'}
            style={{
                top: cursor.top,
                left: cursor.left,
                width: cursor.width,
                height: cursor.height,
            }}
            onDoubleClick={onDoubleClick}
            onKeyDown={(e) => onKeyDown(e)}
        >
            {
                cursor.isEditing &&
                <input ref={inputRef}
                       value={inputValue}
                       onBlur={onBlur}
                       onChange={(e) => setInputValue(e.target.value)} />
            }
        </div>
    )
}