import React from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import './backForWard.css'

const BackForWard = () => {

  const gfg_Run = () => {
    window.scrollTo(('#GFG_DOWN').position().top);
}

  return (
    <div className='main-buttons' >
      <div>
      <AiOutlineUp onClick={gfg_Run} />
      </div>
      <div>
      <AiOutlineDown />
      </div>
    </div>
  )
}

export default BackForWard