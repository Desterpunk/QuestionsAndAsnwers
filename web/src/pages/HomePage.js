import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({children}) => (
  <section>
    <h1 className="text-center">Home</h1>
    <div>
      {children}
    </div>
    <p>welcome to the question and answer app.</p>
    <div className="text-center">
    <Link to="/questions" className="button">
      View Questions
    </Link>
    </div>
  
  </section>
)
export default HomePage
