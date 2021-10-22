import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../actions/questionActions'
import { Question } from '../components/Question'
import Searcher from './Searcher'

const QuestionsPage = ({ dispatch, loading, questions, hasErrors }) => {
    let tittleQuestions = [];

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [dispatch])
    
    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return questions && questions.map(question => <Question dispatch={dispatch} key={question.id} question={question} excerpt />)
    }

    const renderTittleQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>        
        return questions && questions.map(q => tittleQuestions.push(q.question,q.id)) 
    }

    return (
        <section>
            <h1>Questions</h1>
            <Searcher suggestions={tittleQuestions} dispatch={dispatch} type="text" placeholder="Search" id="tittleQuestion" />
            <div hidden>
            {renderTittleQuestions()}
            </div>
            {renderQuestions()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    hasErrors: state.question.hasErrors,
})

export default connect(mapStateToProps)(QuestionsPage)
