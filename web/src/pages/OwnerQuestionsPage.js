import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchOwnerQuestions, deleteQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'
import Searcher from './Searcher'

const OwnerQuestionsPage = ({ dispatch, loading, questions, hasErrors, redirect, userId }) => {
    let tittleQuestions = [];

    useEffect(() => {
        dispatch(fetchOwnerQuestions(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        if (redirect) {
            dispatch(fetchOwnerQuestions(userId))
        }
    }, [redirect, dispatch, userId]);

    const onDelete = (id) => {
        dispatch(deleteQuestion(id))
    }


    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return questions.map(question => <Question
            userId = {userId}
            dispatch = {dispatch}
            key={question.id}
            question={question}
            excerpt onDelete={onDelete} />
            )
    }

    const renderTittleQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>        
        return questions && questions.map(q => tittleQuestions.push(q.question)) 
    }

    return (
        <section>
            <h1>Questions</h1>
            <Searcher suggestions={tittleQuestions} dispatch={dispatch} type="text" placeholder="Search" id="tittleQuestion" />
            {renderTittleQuestions(),renderQuestions()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    hasErrors: state.question.hasErrors,
    redirect: state.question.redirect,
    userId: state.auth.uid
})

export default connect(mapStateToProps)(OwnerQuestionsPage)
