import '../style/Work.css'

const Work = () => {
  return (
    <div name='work' className='work-screen'>
        <div className='work-screen'>
            <div className='work-titlebox'>
                <p className='work-title'>Work</p>
                <p className='work-subtitle'>Here's some of my recent work:</p>
            </div>

            <div className='work-grid'>
                <div className='grid-item hover:scale-105 duration-200'>
                    <div className='item-top'>
                        Portfolio Website
                    </div>
                    <div className='item-bottom'>
                        <a href="/">
                            <button className='button'>Demo</button>
                        </a>
                        <a href="https://github.com/anthonyysz/portfolio">
                            <button className='button'>Code</button>
                        </a>
                    </div>
                </div>
                <div className='grid-item hover:scale-105 duration-200'>
                    <div className='item-top'>
                        Time Series Analysis
                    </div>
                    <div className='item-bottom'>
                        <a href="https://github.com/anthonyysz/CapstoneThree">
                            <button className='button'>Code</button>
                        </a>
                    </div>
                </div>
                <div className='grid-item hover:scale-105 duration-200'>
                    <div className='item-top'>
                        Fruit Image Recognition
                    </div>
                    <div className='item-bottom'>
                        <a href="https://github.com/anthonyysz/fruit_image_recognition">
                            <button className='button'>Code</button>
                        </a>
                    </div>
                </div>

                <div className='grid-item hover:scale-105 duration-200'>
                    <div className='item-top'>
                        Restaurant Reviews NLP
                    </div>
                    <div className='item-bottom'>
                        <a href="https://github.com/anthonyysz/restaurant_reviews_nlp">
                            <button className='button'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work