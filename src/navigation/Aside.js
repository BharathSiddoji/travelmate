import React from 'react'
import { Link } from 'react-router-dom'
const Aside = (props) => {
    
  return (
    <div className='aside'>
        <div className="items">
            <div className="nav__Links">
                <Link to='/' className='link_tag text' onClick={props.setBtn}>Home</Link>
                <Link to='/tours' className='link_tag text' onClick={props.setBtn}>Tours</Link>
                <Link to='/about' className='link_tag text' onClick={props.setBtn}>About</Link>
                <Link to='/contact' className='link_tag text' onClick={props.setBtn}>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Aside