import { questions } from "./data";

export const initialState = {
    currentQ: 0,
    selected: null,
    score: 0,
    showAnswer: false,
    finished: false,
};

export const quizReducer = (state, action) => {
    switch (action.type) {
        case "SELECT_OPTION":
            const isCorrect = action.payload === questions[state.currentQ].answer;
            return {
                ...state,
                selected: action.payload,
                showAnswer: true,
                score: state.score + (isCorrect ? 1 : 0),
            };

        case "NEXT_QUESTION":
            const nextQ = state.currentQ + 1;
            const isFinished = nextQ >= questions.length;
            return {
                ...state,
                currentQ: nextQ,
                selected: null,
                showAnswer: false,
                finished: isFinished,
            };

        case "RESTART":
            return initialState;

        default:
            return state;
    }
};
