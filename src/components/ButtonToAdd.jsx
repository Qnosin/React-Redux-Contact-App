import React from 'react'
import { useNavigate } from 'react-router-dom'
function ButtonToAdd({className}) {
    let navigate = useNavigate();
  return (
    <div className={className}>
        <button onClick={() => navigate('/add')}>Add Contact</button>
    </div>
  )
}

export default ButtonToAdd