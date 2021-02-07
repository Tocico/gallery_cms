import React, { useRef, useEffect } from 'react'
import { TweenMax } from 'gsap'
import { fadeInUp } from '../../components/Animation/index'

const Hero = () => {
  let content = useRef(null)

  useEffect(() => {
    TweenMax.to(content, 0, { css: { visibility: 'visible' } })
    fadeInUp(content)
  }, [])

  return (
    <div className='hero'>
        <div className='uk-container'>
          <div
            className='hero__container uk-align-left'
            ref={el => (content = el)}
          >
            <h1>
              <div className='hero__container__line'>
                <div className='hero__container__line--title'>
                  I draw what I feel ...
                </div>
              </div>
              <div className='hero__container__line'>
                <div className='hero__container__line--title'>
                  My life is making
                </div>
              </div>
              <div className='hero__container__line'>
                <div className='hero__container__line--title'>
                  children HAPPY...
                </div>
              </div>
            </h1>
            <p>
              Better treats serious cardiometabolic diseases to transform lives
              and reduce healthcare utilization through the use of digital
              therapeutics.
            </p>
            <div>
              <h2>Taico</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
