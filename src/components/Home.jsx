import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import '../style/Home.css'


const Home = () => {
  return (
    <div name='home' className='home-screen'>
      <div className='container'>
        <p className='greeting-text'>Hi, my name is</p>
        <h1 className='name-text'>Anthony Szabo</h1>
        <h2 className='position-text'>I'm a Data Scientist</h2>
        <p className='bio-text'>I'm a data scientist with a deep and expansive knowledge of statistics and I love digging into 
            projects within that realm. Currently I am working to expand my knowledge of machine learning, especially in neural networks, 
            while finishing my Bachelor's degree in Computer Science from Western Governor's University.</p>
        <div>
            <a href='/work'>
              <button className='view-work-button'>
                View Work
                <span className='button-arrow'>
                  <HiArrowNarrowRight/>
                </span>
              </button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Home