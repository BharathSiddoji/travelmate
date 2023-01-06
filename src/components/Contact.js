import React from 'react'
import './components.css'
const Contact = () => {
  return (
    <div className='contact'>
      <p className='heading'> For More Information Contact us </p>
      <div className='contact_container'>
        <section className="left_section">
          <form >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className='input' />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='input'/>
            <label htmlFor="number">Contact Number</label>
            <input type="text" name="number" id="number" className='input'/>
            <label htmlFor="message">Tell us more </label>
            <textarea name="message" id="message" cols="28" rows="5"></textarea>
            <input type="submit" value="submit" className='submit input' />
          </form>
        </section>
        <section className="right_section">
          <img src="./assets/office.jpg" alt="" />
        </section>
      </div>
    </div>
  )
}

export default Contact