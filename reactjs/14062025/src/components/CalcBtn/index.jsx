// props
 export const CalcBtn = (props) => {
    const { text, backgroundColor } = props;
    const onclick = () => {
        console.log('onclick');
    };

    return (
        <div
            style={{ backgroundColor }}
            className="btn"
            onClick={onclick}
        >
            {text}
        </div>
    );
};