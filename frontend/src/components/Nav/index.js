import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { staggerReveal, staggerRevealClose, staggerText } from '../Animation'

const Nav = ({ state }) => {
  let menu = useRef(null)
  let layer1 = useRef(null)
  let layer2 = useRef(null)
  let linkmenu1 = useRef(null)
  let linkmenu2 = useRef(null)
  let linkmenu3 = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(layer1, layer2)
      gsap.to(menu, { duration: 1, css: { display: 'none' } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, { duration: 0, css: { display: 'block' } })
      gsap.to([layer1, layer2], {
        duration: 0,
        opacity: 1,
        width: '100%'
      })
      staggerReveal(layer1, layer2)
      staggerText(linkmenu1, linkmenu2, linkmenu3)
    }
  }, [state])
  return (
    <>
      <div ref={el => (menu = el)} className='nav'>
        <div ref={el => (layer1 = el)} className='nav-layer1'></div>
        <div ref={el => (layer2 = el)} className='nav-layer2'>
          <div className='nav__container'>
            <div className='nav__wrapper'>
              <div className='menu-links'>
                <nav>
                  <ul>
                    <li ref={el => (linkmenu1 = el)}>
                      <Link to={`/`} className='uk-link-reset'>
                        Home
                      </Link>
                    </li>
                    <li ref={el => (linkmenu2 = el)}>
                      <Link to={`/about`} className='uk-link-reset'>
                        About
                      </Link>
                    </li>
                    <li ref={el => (linkmenu3 = el)}>
                      <Link to={`/gallery`} className='uk-link-reset'>
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Nav
