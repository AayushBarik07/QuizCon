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
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
  <div className="card shadow-lg p-4 text-center" style={{ maxWidth: '800px', width: '100%' }}>
    <h2 className="mb-3">You Got {totalCorrect.length}/{attemptAnswers}</h2>
    <h5 className="mb-4">Percentage: <strong>{percent}%</strong></h5>

    <div className="row g-3 justify-content-center">
      <div className="col-12 col-sm-4">
        <div className="card border-success shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title text-success">Total Correct</h5>
            <h3>{totalCorrect.length}</h3>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-4">
        <div className="card border-danger shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title text-danger">Total Incorrect</h5>
            <h3>{totalIncorrect}</h3>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-4">
        <div className="card border-secondary shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title text-secondary">Unattempted</h5>
            <h3>{unAttempted}</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4">
      <button 
        onClick={() => window.location.reload()} 
        className="btn btn-success btn-lg px-4"
      >
        Re-Start
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default ResultComponent
