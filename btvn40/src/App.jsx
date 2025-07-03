import React from "react";
import { QuizProvider } from "./QuizContext";
import { useContext } from "react";
import { Question } from "./components/Question";
import { Result } from "./components/Result";
import { QuizContext } from "./QuizContext";
import './App.css';

function QuizContainer() {
    const { state } = useContext(QuizContext);
    return <div>{state.finished ? <Result /> : <Question />}</div>;
}

export default function App() {
    return (
        <QuizProvider>
            <QuizContainer />
        </QuizProvider>
    );
}
