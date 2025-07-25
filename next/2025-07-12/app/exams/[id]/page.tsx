'use client'

import {Box, Grid} from "@mui/material";
import style from './style.module.sass'
import QuestionDescription from './Description'
import QuestionSelection from './Selection'
import HeaderBar from './Header'
import FooterBar from './Footer'
import api from "@/plugins/api";
import {useParams} from "next/navigation";
import {createContext, useEffect, useMemo, useState} from "react";
import {ExamDetailI, ExamI, PartI, QuestionI} from "../../utils ";
import { QuestionType } from "../../utils ";


export interface Question extends QuestionI {
    answer?: string;
    isReview?: boolean;
}

export interface ExamDetail extends ExamDetailI {
    question: Question
}

export interface Exam extends ExamI {
    details: ExamDetail[]
}
export interface ProviderI {
    question: Question,
    setQuestionIndex: (questionIndex: number) => void,
    questionIndex: number,
    exam: Exam,
}
const defaultExam: Exam = {
    id: undefined,
    title: '',
    description: '',
    details: [
        {
            id: undefined,
            section: 0,
            module: 0,
            question: {
                id: undefined,
                code: '',
                description: '',
                question: '',
                type: QuestionType.MULTIPLE_CHOICE,
                optionA: '',
                optionB: '',
                optionC: '',
                optionD: '',
                correctAnswer: '',
                explanation: '',
                answer: '',
                isReview: false,
            }
        }
    ]
}


export const PARTS: PartI[] = [
    {section: 1, module: 1},
    {section: 1, module: 2},
    {section: 2, module: 1},
    {section: 2, module: 2},
]


export const Context: any = createContext(null)

export default function () {
    const {id} = useParams()
    const [exam, setExam] = useState<Exam>(defaultExam)
    const [partIndex, setPartIndex] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const examDetail: ExamDetail = useMemo(() => {
        return exam.details[questionIndex]
    }, [questionIndex, exam])


    const question: Question = useMemo(() => {
        return examDetail.question
    }, [examDetail])

    console.log("ExamDetail: ", examDetail)
    console.log("question: ", question)


    const provider: ProviderI = {
        question,
        setQuestionIndex,
        questionIndex,
        exam
    }


    const getExam = async () => {
        try {
            const {data} = await api.get(`/exams/${id}`)
            setExam(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getExam()
    }, [])


    return (
        <Context.Provider value={provider}>
            <HeaderBar/>
            <Box sx={{margin: '0 5%'}} className={style.main}>
                <Grid container>
                    <Grid size={6} sx={{paddingTop: '10px'}}>
                        <QuestionDescription/>
                    </Grid>
                    <Grid size={6}>
                        <QuestionSelection/>
                    </Grid>
                </Grid>
            </Box>
            <FooterBar/>
        </Context.Provider>
    )
}