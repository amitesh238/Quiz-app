import React from 'react'

const Score = (props) => {
  return (
    <div>
        <h2>Quiz Result</h2> <br />
      <p style={{
        fontSize:"20px"
      }}>Your Total score is: {props.score}</p>
    </div>
  )
}

export default Score
