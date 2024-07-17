import React, { useEffect, useState } from 'react'
import questions from "./questions"
import "../style/quiz.css"
import Score from './Score'

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [clickOption, setClickOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleNextQuestion = () => {
    console.log("the score is " + score)
    if (clickOption !== null) {
      updateScore()
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1)
        setClickOption(null)
      } else {
        console.log("final score is :" + score)
        setShowResult(true)
      }
    } else {
      alert("please select the option")
    }
  }

  const updateScore = () => {
    if (questions[currentQuestion].correctAnswer === clickOption + 1) {
      setScore(prevScore => prevScore + 1);
    }
  };


  return (
    <div className='quiz-page'>
      <div className='heading'>
        <h1>Web Development Quiz (easy)</h1>
      </div>
      <div className="quiz-card">
        {
          showResult ?
            (<Score score={score} />)
            :
            (
              <>
                <div className="quiz-question-container">
                  <p className="quiestion-number">{currentQuestion + 1}.</p>
                  <p className='quiz-qustion'>{questions[currentQuestion].question}</p>
                </div>
                <div className="quiz-options-container">
                  {
                    questions[currentQuestion].options.map((option, index) => (
                      <p
                        key={index}
                        className={`${clickOption === index ? "selected-option" : null}`}
                        onClick={() => setClickOption(index)}
                      >{index + 1 + "." + " " + option}</p>
                    ))
                  }
                </div>

                <button className='next-btn' onClick={handleNextQuestion}>Next</button>
              </>
            )
        }
      </div>
    </div>
  )
}

export default Quiz
