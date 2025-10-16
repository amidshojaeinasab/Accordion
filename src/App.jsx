import { useState } from 'react'
import Question from './question'
import data from "./Data"

function App() {


  return (
    <div className="container">
      <h3>سوالات متداول</h3>
      <div className="info">
        {
          data.map((question) =>{
            return <Question key={question.id} {...question}/>
          })
        }
      </div>
    </div>
  )
}

export default App
