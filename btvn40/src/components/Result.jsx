import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { questions } from "../data";
export const Result = () => {
    const { state, dispatch } = useContext(QuizContext);

    return (
        <div>
            <h2>Kết quả</h2>
            <p>
                Bạn được {state.score}/{questions.length} điểm
            </p>
            <button onClick={() => dispatch({ type: "RESTART" })}>Làm lại</button>
        </div>
    );
};
