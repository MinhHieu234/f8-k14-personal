'use client'

import style from "./style.module.sass";
import { Box } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MultipleChoice from "./MultipleChoice";
import { useContext } from "react";
import { Context, ProviderI } from "@/app/exams/[id]/page";

export default function QuestionSelection() {
    const injector: ProviderI = useContext(Context);
    const { question, questionIndex, exam } = injector;

    return (
        <>
            <Box className={style.toolBar}>
                <Box className={style.numberOfQuestion}>
                    Câu {questionIndex + 1} / {exam.details.length}
                </Box>
                <Box>
                    <Box>
                        <CalculateIcon style={{ color: '#1976D2' }} />
                        <span>Calculator</span>
                    </Box>
                    <Box>
                        <BookmarkBorderIcon style={{ color: '#1976D2' }} />
                        <span>Mark for review</span>
                    </Box>
                    <Box>ABC</Box>
                </Box>
            </Box>

            <Box>
                <p>{question.question}</p>
                <MultipleChoice />
            </Box>
        </>
    );
}
