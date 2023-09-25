import '../work/work.scss'
import { useState } from 'react'
import {WorkList} from '../../WorkList'

function Work() {
  const [slides, setSlides] = useState([])


  return (
    <div className='work' id="work">
    <div className='slides' style={{transform:`translate (${slides * 100}vw)`}}>
       {
        WorkList.map((data)=>(
         
          
          <div className='containter'>
    <div className='left'>
      <div className='icons'>
      <img src={data.icon} alt='' />
      </div>
      <p></p>

      <h3>Projects</h3>
    </div>

    <div className='right'></div>

    </div>
    
        ))
       }
    
    
    </div>
    
      
    </div>
  )
}

export default Work
