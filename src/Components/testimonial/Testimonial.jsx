import '../testimonial/testimonail.scss'
import {test} from '../../Test'


function Testimonial() {
  return (
    <div className='test' id='testimonial'>
    <h1> Testimonial</h1>
    <div className='containers'>
    {
      test.map((test)=>(
    <div className={test.features ?' card features ' : 'card'}>
       <div className='top'>
       <img src='Assets/arrow-key.png' alt='' className='left'/>
       <img src={test.img} alt='' className='center'/>
       <img src={test.icon} alt='' className='right'/>

       </div>
       <div className='center'>{test.desc}</div>
       <div className='bottom'>
       <h3>{test.name}</h3>
       <h4>{test.title}</h4>
       </div>

    
    </div>
    ))
  }
    </div>
      
    </div>
    
  )
}

export default Testimonial
