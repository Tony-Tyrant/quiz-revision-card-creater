import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicsSlice";

export const newQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuizIds({quizId:payload.id, topicId: payload.topicId}));
        dispatch(addQuiz(payload));
    }}
    
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers:{
        addQuiz: (state, action) => {state.quizzes[action.payload.id] = action.payload}
    }
    }
)

export const selectQuiz = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;