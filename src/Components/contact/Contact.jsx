import '../contact/contact.scss'

function Contact() {
  return (
    <div className='contact'  id='contact' >
    <div className='container'>
       
    <div className='left'>
    <img src="https://w7.pngwing.com/pngs/847/280/png-transparent-two-person-shaking-hands-handshake-handshake-hands-love-hand-people-thumbnail.png" alt=''/>
    </div>
    <div className='right'>
     <h1>Contact</h1>
     <form >
     <input type='email' placeholder='enter your mail'/>
     <textarea  placeholder='Message'></textarea>
     <button type='submit'>Submit</button>
     
     </form>
     
    </div>
    </div>
      
    </div>
  )
}

export default Contact
