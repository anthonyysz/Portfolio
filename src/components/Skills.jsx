import GitHub from '../assets/github.png'
import Pandas from '../assets/pandas.png'
import Python from '../assets/python.png'
import ReactImage from '../assets/react.png'
import SQL from '../assets/sql.png'
import Tailwind from '../assets/tailwind.png'
import '../style/Skills.css'

const Skills = () => {
  return (
    <div name='skills' className='skills-screen'>
       <div className='skills-titlebox'>
         <p className='skills-title'>Skills</p>
         <p className='skills-subtitle'>These are some of the software that I've worked with:</p>
        </div>
         
       <div className='skills-grid'>
         <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={GitHub} alt="GitHub icon" />
            <p className='skills-image-label'>GitHub</p>
          </div>
          <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={SQL} alt="SQL icon" />
            <p className='skills-image-label'>SQL</p>
          </div>
          <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={Python} alt="Python icon" />
            <p className='skills-image-label'>Python</p>
          </div>
          <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={Pandas} alt="Pandas icon" />
            <p className='skills-image-label'>Pandas</p>
          </div>
          <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={ReactImage} alt="React Icon" />
            <p className='skills-image-label'>React</p>
          </div>
          <div className='skills-grid-item hover:scale-105 duration-500'>
            <img className='skills-image' src={Tailwind} alt="Tailwind icon" />
            <p className='skills-image-label'>Tailwind</p>
          </div>
       </div>
    </div>
  )
}

export default Skills