import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { AiOutlineMinusCircle } from 'react-icons/ai';

function Question({title, info}) {
  const [showInfo, setShowInfo] = useState(false)

  const showHandler = () =>{
    setShowInfo(!showInfo)
  }
  return (
    <div className="question">
        <header>
            <h4>{title}</h4>
            <button onClick={showHandler}>{showInfo ? <AiOutlineMinusCircle/> : <FaCirclePlus/>  }</button>
        </header>
        {
          showInfo && <p>{info}</p> 
        }
    </div>
  )
}

export default Question

