import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { questions } from "../data";

export const Question = () => {
    const { state, dispatch } = useContext(QuizContext);
    const question = questions[state.currentQ];

    const handleSelect = (opt) => {
        if (!state.showAnswer) {
            dispatch({ type: "SELECT_OPTION", payload: opt });
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <span>Câu {state.currentQ + 1}/{questions.length}</span>
                <span>{/* có thể thêm đếm ngược nếu muốn */}</span>
            </div>

            <div className="quiz-question">{question.question}</div>

            <div className="options-grid">
                {question.options.map((opt) => {
                    let className = "option";
                    if (state.showAnswer) {
                        if (opt === question.answer) className += " correct";
                        else if (opt === state.selected) className += " wrong";
                    } else if (opt === state.selected) className += " selected";

                    return (
                        <div key={opt} className={className} onClick={() => handleSelect(opt)}>
                            {opt}
                        </div>
                    );
                })}
            </div>

            {state.showAnswer && (
                <button className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
                    Câu tiếp theo
                </button>
            )}

            {state.finished && (
                <div className="final-box">Đây là câu trả lời cuối cùng của tôi</div>
            )}
        </div>

    );
};
