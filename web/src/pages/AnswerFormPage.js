import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {  fetchQuestion, postAnswer } from '../actions/questionActions'
import { connect } from 'react-redux'
import { Question } from '../components/Question'
import emailjs from 'emailjs-com'

const FormPage = ({ dispatch, loading, redirect, match,hasErrors, question, userId,email }) => {
    const { register, handleSubmit } = useForm();
    const { id } = match.params
    const history = useHistory();

    const onSubmit = data => {
        data.userId =  userId;
        data.questionId = id;
        dispatch(postAnswer(data));

        let object = {
            email: email,
            answer:data.answer,
            question: question.question};   
            
        emailjs.send("service_r511zxi","template_rwyqggn",object,"user_JxZXYDlXvrsqo9HEkayqp")
        .then(res=>{console.log(res)})
        .catch(err=> console.log(err));
    
    };

    useEffect(() => {
        dispatch(fetchQuestion(id))
    }, [dispatch, id])

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])

    const renderQuestion = () => {
        if (loading.question) return <p>Loading question...</p>
        if (hasErrors.question) return <p>Unable to display question.</p>

        return <Question question={question} />
    }


    return (
        <section>
            {renderQuestion()}
            <h1>New Answer</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="answer">Answer</label>
                    <textarea id="answer" {...register("answer", { required: true, maxLength: 300 })} />
                </div>
                <button type="submit" className="btn mx-5" disabled={loading} >{
                    loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    redirect: state.question.redirect,
    question: state.question.question,
    hasErrors: state.question.hasErrors,
    userId: state.auth.uid,
    email: state.auth.email
})

export default connect(mapStateToProps)(FormPage)