import React, { useEffect, useRef } from 'react'
import { overlayAnimation } from '../Animation'

const Overlay = () => {
  let overlay = useRef(null)
  useEffect(() => {
    overlayAnimation(overlay)
  }, [overlay])

  return (
    <div className='wrapper' ref={el => (overlay = el)}>
      <div className='overlay first'></div>
      <div className='overlay second'></div>
      <div className='overlay third'></div>
    </div>
  )
}

export default Overlay
