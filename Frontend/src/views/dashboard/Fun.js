import React from 'react'

import '../../static/css/Fun.css';


export default function Fun() {
  let vidArray = [`https://www.youtube.com/embed/UnHDO9Qw2B0?controls=0&autoplay=1`,"https://www.youtube.com/embed/bj_dtWTKetI?controls=0&autoplay=1",`https://www.youtube.com/embed/LIWbUjHZFTw?controls=0&autoplay=1`,"https://www.youtube.com/embed/QzoElrA-8_g?controls=0","https://www.youtube.com/embed/yCjJyiqpAuU?controls=0"]

  const [count, setCount] = React.useState(0)
    
  function leftClick() {
    if(count!=0)
    setCount(count - 1)
  }
            
  function rightClick() {
    if(count!=vidArray.size-1)
    setCount(count + 1)
  }

  return (
    <div className='Fun'>
      <h1>Fun Zone</h1>
      <div className="Fun_funzone">
          <div className="Fun_left" id="left" onClick={leftClick}>{'<'}</div>
          <div className="Fun_video">
              <iframe src={vidArray[count]} id="video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="Fun_right" id="right" onClick={rightClick}>{'>'}</div>
      </div>
    </div>
  )
}
