import React, { useState } from 'react'
import QuizQues from '../api/Ques.json'
const QuesComponent = ({showScreen, setShowScreen, answers, setAnswers}) => {
  const [index, setIndex] = useState(0);

  const quiz = QuizQues[index];
  const existingAnswer = answers.find((answer, i) => answer.id == quiz.id)

  const addAnswer = (id, ans) => {
    const existingAnswer = answers.find((answer, i) => answer.id == id)
    if(existingAnswer) {
      const newAnswer = answers.map((curr, idx) => {
        if(curr.id == id) {
          return { ...curr, ans };
        }
        return curr
      })
      setAnswers(newAnswer)
      return
    }

    setAnswers([
      ...answers,
      {id, ans}
    ])
  }

  return (
    <>
      <div className='card py-5 px-3 mt-3'>
        {/* {JSON.stringify(answers)} */}
        <div className='d-flex flex-column'>
          <h5>Question {quiz.id}</h5>  
          <h2>{quiz.title}</h2>
          <p className='mt-4'>Choose the correct option</p>
          <div className='d-flex flex-column'>
            {
              quiz.options.map((op, idx) => {
                return <label htmlFor={op} key={idx}>
                  <input 
                  onChange={() => addAnswer(quiz.id, idx)} 
                  className='mx-2 mb-2'
                  checked={!!existingAnswer && existingAnswer.ans === idx}
                  type="radio" name='answer' id={op} value={op} />{op}
                </label>
              })
            }
          </div>

          <div className='mb-3 justify-content-end d-flex mt-4 px-5'> 
            <button
            disabled={index == 0}
            onClick={() => setIndex(index-1)} 
            className='btn btn-danger mx-2'>Previous</button>
            <button 
             disabled={index == QuizQues.length-1}
             onClick={() => setIndex(index+1)} 
             className='btn btn-Light mx-2 border-dark'>
              Next
            </button>
            <button 
              disabled={index != QuizQues.length-1}
            onClick={() => setShowScreen('Result')} className='btn btn-success mx-2'>Submit</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default QuesComponent
