import React, { createContext, useReducer } from "react";
import { quizReducer, initialState } from "./quizReducer";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
};
