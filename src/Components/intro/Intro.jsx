import { useEffect, useRef } from 'react'
import '../intro/intro.scss'
import {init} from 'ityped'

function Intro() {
  const text = useRef()
   
  useEffect(()=>{
    init(text.current,{
      backDelay:2000,
      showCursor:true,
      backSpeed:60,
      strings:['frontend designer..','product designer', 'UIUX designer']

    },[])
  })
  return (
    <div className='intro' id='intro'>
     <div className='left'>
       <div className='img-container'>
        <img src='Assets/cyndy.png'alt=''/>
       </div>
     </div> 

     <div className='right'>
      <div className='right-content'>
       <h2>Hi There , I'm</h2>
       <h1>Cynthia</h1>
       <h3>Freelance  <span ref={text}></span></h3>
      </div>
     </div>   
    </div>
  )
}

export default Intro
