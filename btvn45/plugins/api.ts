import axios from "axios";
import { ExamI } from "../app/utils"; // chỉnh đường dẫn nếu cần

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export async function fetchQuestions(): Promise<ExamI['details']> {
    const res = await api.get<ExamI>('/exams/1');
    return res.data.details;
}

export default api;
