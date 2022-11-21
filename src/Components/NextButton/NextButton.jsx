import React from 'react'
import './nextButton.css'
import {AiOutlineCheck} from 'react-icons/ai'


const NextButton = () => {
  return (
    <button className='field-next-btn btn' >
      <p>Next</p>
      <p><AiOutlineCheck className='field-check-btn' /></p>
    </button>
  )
}

export default NextButton
