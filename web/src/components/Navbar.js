import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillPatchQuestionFill } from 'react-icons/bs';

export const PublicNavbar = () => (
  <div>
    <nav>
      <div className="mx-5" >
        <Link to="/"><BsFillPatchQuestionFill size="2em" color="red" /></Link>
      </div>
      <section>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
      </section>
    </nav>   
  </div>

)

export const PrivateNavbar = () => (
  <nav>
      <div className="mx-5" >
        <Link to="/"><BsFillPatchQuestionFill size="2em" color="red" /></Link>
      </div>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">MyQuestions</Link>
      <Link to="/answers">MyAnswers</Link>

    </section>
  </nav>
)
