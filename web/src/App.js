import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { login } from './actions/authActions';

import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import OwnerAnswersPage from './pages/OwnerAnswersPage'
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from './components/Footer';
import { auth } from './services/firebase';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import { SignUp } from './components/SignUp';


const App = ({ dispatch }) => {
  const [user] = useAuthState(auth);
  if(user){
    dispatch(login(user.email, user.uid))
  }
  return (
    <Router>
      {user ?
        <>
          <PrivateNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignOut dispatch={dispatch}/></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answers" component={OwnerAnswersPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/editUser" component={EditUserPage} />
            <Redirect to="/" />
          </Switch>
        </> :
        <>
          <PublicNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignIn/></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </>
      }
      <Footer/>
    </Router>
  )
}


export default App
