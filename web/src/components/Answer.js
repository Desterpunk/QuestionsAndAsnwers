import React from 'react'
import { Modal } from 'reactstrap';
import useModal from '../hooks/useModal';
import { DiSqllite } from 'react-icons/di';

export const Answer = ({ answer, excerpt, onDelete}) => {

  const [isOpenModal, openModal, closeModal] = useModal();

  return (
  <article className={excerpt ? 'question-excerpt' : 'question'}>
    <p><DiSqllite/> {answer.answer}</p>
    <br/>
    {onDelete && (
      <button className="button" onClick={openModal}>DELETE</button>
    )}
    <div>
      <Modal
      isOpen={isOpenModal}>
        
          <h3 className="pregunta text-center">Estas seguro de eliminar?</h3>
          <div className="text-center">
          <button className="btn_modal color1" onClick={() => onDelete(answer.id)}>Si</button>
          <button className="btn_modal color2" onClick={closeModal}>No</button>
          </div>
      </Modal>
    </div>
  </article>
  )
}