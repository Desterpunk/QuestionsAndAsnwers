import React, { Fragment, useEffect, useState } from "react";
import { fetchQuestionsLike, fetchQuestions } from '../actions/questionActions'
const Searcher = ({suggestions, dispatch}) => {

    const [state, setState] = useState({
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
    })
    


    const handleChange = (event) => {

        const userInput = event.currentTarget.value;
        
        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        searchQuestion(userInput)

        setState({
            ...state, 
            filteredSuggestions,
            showSuggestions: true,       
            userInput: event.target.value,
        });
    }

    const searchQuestion = (params) => {
        if (params !== null && String(params).trim() !== "") {
          dispatch(fetchQuestionsLike(params));
        } else {
          dispatch(fetchQuestions())
        }
      }

      
    useEffect(() => {
        
        if(state.userInput < 1){

            setState({
                filteredSuggestions: [],
            })

        }

    },[state])

    const handleClick = (e) => {
        setState({
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });


        searchQuestion(e.currentTarget.innerText)
    }

    return (
        <Fragment>
            <input
            onChange={handleChange}
            type="text"
            value={state.userInput ||""}
            />
            <ul className="suggestions">
            {state.filteredSuggestions.map((suggestion) => {
                return(
                    <li key={suggestion} onClick={handleClick}>
                        {suggestion}
                    </li>
                )
            })}
            </ul>
      </Fragment>
    )
}  

export default Searcher;