import React from 'react'
import '../style/about.css'

const About = () => {
  return (
    <div name='about' className='about-screen'>
      <div className='about-columns'>
        <div className='about-grid-item-top'>
          <div className='about-title-div'>
            <p className='about-title'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='about-grid-item-bottom'>
          <div className='about-subtitle-div'>
            <p>Hey! Feel free to look around!</p>
          </div>
          <div className='about-text-div'>
            <p>I am a training Data Scientist, having graduated from Springboard's Data Science Career Track. 
              I am finishing up studies at Western Governors University, earning my Bachelor's Degree in Computer Science. I'd love to work in a position requiring my 
              knowledge in statistics, machine learning, software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About