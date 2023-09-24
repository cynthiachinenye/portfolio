import '../intro/intro.scss'

function Intro() {
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
       <h3>Freelance</h3>
      </div>
     </div>   
    </div>
  )
}

export default Intro
