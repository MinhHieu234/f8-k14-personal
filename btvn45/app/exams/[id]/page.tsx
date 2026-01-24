'use client';

import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchQuestions } from '../../../plugins/api';
import Description from './Description';
import Selection from './Selection';
import MultipleChoice from './MultipleChoice';
import Essay from './Essay';
import Footer from './Footer';
import ReviewQuestions from './ReviewQuestions';

interface Question {
    id: number;
    type: 'multiple-choice' | 'essay';
    content: string;
    options?: string[];
    selectedAnswer?: string;
    essayAnswer?: string;
    review: boolean;
}

export default function ExamPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchQuestions()
            .then((data) => {
                const init = data.map((q: Question) => ({
                    ...q,
                    selectedAnswer: '',
                    essayAnswer: '',
                }));
                setQuestions(init);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    const handleAnswer = (id: number, answer: string) => {
        setQuestions(prev =>
            prev.map(q =>
                q.id === id ? { ...q, selectedAnswer: answer } : q
            )
        );
    };

    const handleEssayAnswer = (id: number, text: string) => {
        setQuestions(prev =>
            prev.map(q =>
                q.id === id ? { ...q, essayAnswer: text } : q
            )
        );
    };

    const handleSelectQuestion = (id: number) => {
        const index = questions.findIndex(q => q.id === id);
        if (index !== -1) setCurrentIndex(index);
    };

    const handleNext = () => setCurrentIndex(i => Math.min(i + 1, questions.length - 1));
    const handlePrev = () => setCurrentIndex(i => Math.max(i - 1, 0));

    const handleToggleReview = (id: number) => {
        setQuestions(prev =>
            prev.map(q =>
                q.id === id ? { ...q, review: !q.review } : q
            )
        );
    };

    const current = questions[currentIndex];

    if (loading) return <CircularProgress />;

    return (
        <Box p={4}>
            <Description title="Đề thi thử" totalQuestions={questions.length} durationMinutes={60} />
            <Selection
                questions={questions.map(q => ({
                    id: q.id,
                    answered: q.type === 'essay' ? !!q.essayAnswer : !!q.selectedAnswer,
                    review: q.review,
                }))}
                onSelect={handleSelectQuestion}
            />

            {current.type === 'multiple-choice' ? (
                <MultipleChoice question={current} onAnswer={handleAnswer} />
            ) : (
                <Essay question={{ id: current.id, content: current.content, answer: current.essayAnswer || '' }} onAnswerChange={handleEssayAnswer} />
            )}

            <Footer
                current={currentIndex + 1}
                total={questions.length}
                onNext={handleNext}
                onPrev={handlePrev}
            />

            <Box mt={2}>
                <button onClick={() => handleToggleReview(current.id)}>
                    {current.review ? 'Bỏ review' : 'Đánh dấu review'}
                </button>
            </Box>

            <ReviewQuestions questions={questions} />
        </Box>
    );
}
