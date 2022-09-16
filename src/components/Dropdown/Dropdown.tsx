import { useState } from 'react'
import { Link } from 'react-router-dom'
import './dropDown.css'

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown">

        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            <img src='Stroke.png' alt='stroke'/>
            <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
        <div className="dropdown-content">
            <div className="dropdown-item"><Link to='/ChangePassword'>Change Password</Link></div>
            <div className="dropdown-item"><Link to='#'>Logout</Link></div>
 
        </div>
        )}
    </div>
  )
}

export default Dropdown

