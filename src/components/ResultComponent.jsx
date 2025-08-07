import React from 'react'
import QuizQues from '../api/Ques.json'

const ResultComponent = ({answers, setAnswers}) => {
  const totalQues = QuizQues.length;
  const attemptAnswers = answers.length;
  const totalCorrect = answers.length > 0 ? answers.filter
    ((curr, i) => {
      const quiz = QuizQues.find((q => q.id == curr.id))
      return quiz && quiz.correct === curr.ans;
    }) : []

    // const totalIncorrect = answers.length > 0 ? answers.filter
    // ((curr, i) => {
    //   const quiz = QuizQues.find((q => q.id == curr.id))
    //   return quiz.correct !== curr.ans
    // }) : []
    const unAttempted = (totalQues - attemptAnswers > 0) ? totalQues - attemptAnswers : 0;
    const totalIncorrect = totalQues - totalCorrect.length - unAttempted;
    const percent = ((totalCorrect.length/attemptAnswers)*100).toFixed(0);


  return (
    <>
      <div className='card px-5 py-5'>
          {/* {JSON.stringify(answers)} */}
          <h1 className='text-center'>You Got {totalCorrect.length}/{attemptAnswers}.</h1>
          <div className="text-center mt-3">
            <h4>Percentage: {percent}%</h4>
          </div>
          <div className="row gx-3 px-4 py-5 justify-content-center">
            <div className="col-sm-6">
              <div className="card py-5 px-3">
                <h3>Total Correct: {totalCorrect.length}</h3>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card py-5 px-3">
                <h3>Total Incorrect: {totalIncorrect}</h3>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card py-5 px-3 mt-3">
                <h3>Unattempted: {unAttempted}</h3>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button onClick={() => window.location.reload()} className='btn px-4 btn-success'>Re-Start</button>
          </div>
      </div> 
    </>
  )
}

export default ResultComponent
