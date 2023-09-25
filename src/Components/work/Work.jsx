import '../work/work.scss'
import { useState } from 'react'
import { work } from '../../WorkList'

function Work() {
  const [slides, setSlides] = useState([])


  return (
    <div className='work' id="work">
      <div className='slides' style={{ transform: `translate (${slides * 100}vw)` }}>
        {
          work.map((data) => (


            <div className='container'>
              <div className='item'>
              
              <div className='left'>
             <div className='left-container'>
             <div className='img-icons'>
             <img src={data.icon} alt=''/>
           </div>
           <h2>{data.title}</h2>
           <p>{data.desc}</p>

           <span>Projects</span>
             </div>
            </div> 

              </div>

              <div className='right'>
                <img src={data.img} />
              </div>

            </div>

          ))
        }


      </div>


    </div>
  )
}

export default Work
