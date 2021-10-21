import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    answer: answersReducer,
    auth: authReducer,
    user: userReducer
})

export default rootReducer
