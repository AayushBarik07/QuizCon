import React, { useState, useEffect } from 'react'
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

  // Timer states
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;

    if (minutes === 0 && seconds === 0) {
      alert("Time's up! Submitting quiz...");
      setShowScreen('Result');
      return;
    }

    timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else if (minutes > 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const progressPercentage = (quiz.id / QuizQues.length) * 100;

  return (
    <>
      <style jsx>{`
        .quiz-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        
        .quiz-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .timer-section {
          background: linear-gradient(45deg, #ff6b6b, #ee5a6f);
          color: white;
          border-radius: 15px;
        }
        
        .option-card {
          background: #ffffff;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .option-card:hover {
          border-color: #6c63ff;
          background: #f8f9ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(108, 99, 255, 0.15);
        }
        
        .option-card.selected {
          border-color: #6c63ff;
          background: linear-gradient(45deg, #e8f2ff, #f0f8ff);
          box-shadow: 0 8px 25px rgba(108, 99, 255, 0.25);
        }
        
        .option-letter {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #6c757d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        
        .option-card.selected .option-letter {
          background: #6c63ff;
          transform: scale(1.1);
        }
        
        .btn-custom {
          border-radius: 10px;
          font-weight: 600;
          padding: 8px 20px;
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-previous {
          background: #dc3545;
          color: white;
        }
        
        .btn-previous:hover:not(:disabled) {
          background: #c82333;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(220, 53, 69, 0.4);
        }
        
        .btn-next {
          background: #ffffff;
          color: #6c63ff;
          border: 2px solid #6c63ff !important;
        }
        
        .btn-next:hover:not(:disabled) {
          background: #6c63ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(108, 99, 255, 0.4);
        }
        
        .btn-submit {
          background: linear-gradient(45deg, #28a745, #20c997);
          color: white;
        }
        
        .btn-submit:hover:not(:disabled) {
          background: linear-gradient(45deg, #218838, #1ea589);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }
        
        .progress-custom {
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.3);
        }
        
        .progress-bar-custom {
          background: linear-gradient(90deg, #00d4ff, #090979);
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        
        .question-number {
          background: linear-gradient(45deg, #6c63ff, #764ba2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>

      <div className="quiz-container d-flex align-items-center justify-content-center p-3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="quiz-card rounded-4 overflow-hidden">
                
                {/* Timer Header - Compact */}
                <div className="timer-section p-3 mb-0">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center">
                        <div className="question-number me-3">
                          {quiz.id}
                        </div>
                        <div>
                          <h6 className="mb-1 fw-bold">Quiz Challenge</h6>
                          <small className="opacity-75">Question {quiz.id} of {QuizQues.length}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-2 mt-md-0">
                      <div className="d-flex flex-column align-items-md-end">
                        <small className="opacity-75 mb-1">Time Left</small>
                        <h4 className="mb-0 fw-bold">
                          ⌛ {minutes.toString().padStart(2, "0")}:
                          {seconds.toString().padStart(2, "0")}
                        </h4>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Progress Bar */}
                  <div className="progress progress-custom mt-3">
                    <div 
                      className="progress-bar progress-bar-custom" 
                      style={{width: `${progressPercentage}%`}}
                    ></div>
                  </div>
                </div>

                {/* Main Content - Optimized for no scroll */}
                <div className="p-4">
                  {/* Question */}
                  <div className="text-center mb-4">
                    <h2 className="fw-bold text-dark mb-3 lh-sm">{quiz.title}</h2>
                    <p className="text-muted mb-0 fs-6">Choose the correct option</p>
                  </div>
                  
                  {/* Options - Compact spacing */}
                  <div className="row g-3 mb-4">
                    {quiz.options.map((op, idx) => {
                      const isSelected = !!existingAnswer && existingAnswer.ans === idx;
                      const letters = ['A', 'B', 'C', 'D'];
                      
                      return (
                        <div key={idx} className="col-12 col-md-6">
                          <label 
                            htmlFor={`option-${idx}`}
                            className={`option-card p-3 d-block h-100 ${isSelected ? 'selected' : ''}`}
                            onClick={() => addAnswer(quiz.id, idx)}
                          >
                            <div className="d-flex align-items-center">
                              <div className="option-letter me-3 flex-shrink-0">
                                {letters[idx]}
                              </div>
                              <div className="flex-grow-1">
                                <input 
                                  onChange={() => addAnswer(quiz.id, idx)} 
                                  checked={isSelected}
                                  type="radio" 
                                  name='answer' 
                                  id={`option-${idx}`}
                                  value={op}
                                  className="visually-hidden"
                                />
                                <span className={`${isSelected ? 'fw-semibold text-primary' : 'text-dark'}`}>
                                  {op}
                                </span>
                              </div>
                              {isSelected && (
                                <div className="text-primary ms-2">
                                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons - Compact */}
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <button
                      disabled={index === 0}
                      onClick={() => setIndex(index-1)} 
                      className={`btn btn-custom btn-previous ${index === 0 ? 'opacity-50' : ''}`}
                    >
                      ← Previous
                    </button>

                    <div className="d-flex gap-2">
                      <button 
                        disabled={index === QuizQues.length-1}
                        onClick={() => setIndex(index+1)} 
                        className={`btn btn-custom btn-next ${index === QuizQues.length-1 ? 'opacity-50' : ''}`}
                      >
                        Next →
                      </button>
                      
                      <button 
                        disabled={index !== QuizQues.length-1}
                        onClick={() => setShowScreen('Result')} 
                        className={`btn btn-custom btn-submit ${index !== QuizQues.length-1 ? 'opacity-50' : ''}`}
                      >
                        🎯 Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuesComponent;