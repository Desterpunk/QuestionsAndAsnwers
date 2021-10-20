import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    answer: answersReducer,
    auth: authReducer
})

export default rootReducer
