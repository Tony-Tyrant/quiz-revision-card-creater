import { createSlice } from "@reduxjs/toolkit"; 

const topicsSlice = createSlice ({
    name: 'topics',
    initialState: {topics:{}},
    reducers: {
        addTopic: (state, action) => {state.topics[action.payload.id] = {...action.payload, quizIds:[]}},
        addQuizIds: (state, action) => {
            //console.log(action.payload.topicId)
            //console.log(state.topics[action.payload.topicId])
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

export const selectTopic = state => state.topics.topics;
export const { addTopic, addQuizIds } = topicsSlice.actions;
export default topicsSlice.reducer;