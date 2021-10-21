import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'reactstrap';
import { fetchQuestionsByCategory } from '../actions/questionActions';
import useModal from '../hooks/useModal';

export const Question = ({ question, excerpt, onDelete, dispatch, userId}) => {

  const [isOpenModal, openModal, closeModal] = useModal();

  return (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <h2>{question.question}</h2>

    {userId === undefined && (
      <p> <span className="card-text"  onClick={() => {
        if (dispatch !== undefined) dispatch(fetchQuestionsByCategory(question.category))
      }}> {question.category}  </span> - <small>{question.type}</small> </p> 
    )}

    {userId !== undefined && (
        <p>  {question.category} - <small>{question.type}</small> </p>      
    )}

    {onDelete &&  (
      <button className="button right" onClick={openModal}>DELETE</button>
    )}
    {excerpt && (
      <Link to={`/question/${question.id}`} className="button">
        View Question
      </Link>
    )}
    <div>
      <Modal
      isOpen={isOpenModal}>
        
          <h3 className="pregunta text-center">Estas seguro de eliminar?</h3>
          <div className="text-center">
          <button className="btn_modal color1" onClick={() => onDelete(question.id)}>Si</button>
          <button className="btn_modal color2" onClick={closeModal}>No</button>
          </div>
      </Modal>
    </div>
  </article>
  )
}
