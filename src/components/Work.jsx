import '../style/Work.css'

const Work = () => {
  return (
    <div name='work' className='work-screen'>
        <div className='work-titlebox'>
            <p className='work-title'>Work</p>
            <p className='work-subtitle'>Here's some of my recent work:</p>
        </div>

        <div className='work-grid'>
            <div className='work-grid-item hover:scale-105 duration-200'>
                <div className='item-top'>
                    Portfolio Website
                </div>
                <div className='item-bottom'>
                    <a href="https://anthonyysz.github.io/portfolio/">
                        <button className='button'>Demo</button>
                    </a>
                    <a href="https://github.com/anthonyysz/portfolio">
                        <button className='button'>Code</button>
                    </a>
                </div>
            </div>
            <div className='work-grid-item hover:scale-105 duration-200'>
                <div className='item-top'>
                    Fight Result Predictor
                </div>
                <div className='item-bottom'>
                    <a href="https://www.fightresultpredictor.xyz/">
                        <button className='button'>Demo</button>
                    </a>
                    <a href="https://github.com/anthonyysz/Fight-Result-Predictor">
                        <button className='button'>Code</button>
                    </a>
                </div>
            </div>
            <div className='work-grid-item hover:scale-105 duration-200'>
                <div className='item-top'>
                    Time Series Analysis
                </div>
                <div className='item-bottom'>
                    <a href="https://github.com/anthonyysz/GDP-Time-Series-Analysis">
                        <button className='button'>Code</button>
                    </a>
                </div>
            </div>
            <div className='work-grid-item hover:scale-105 duration-200'>
                <div className='item-top'>
                    Fruit Image Recognition
                </div>
                <div className='item-bottom'>
                    <a href="https://github.com/anthonyysz/Fruit-Image-Recognition">
                        <button className='button'>Code</button>
                    </a>
                </div>
            </div>
            <div className='work-grid-item hover:scale-105 duration-200'>
                <div className='item-top'>
                    Restaurant Reviews NLP
                </div>
                <div className='item-bottom'>
                    <a href="https://github.com/anthonyysz/Restaurant-Reviews-NLP">
                        <button className='button'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work