import './navbar.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
function Navbar() {
  return (
    <div className='nav' id='nav'>

    <div className='wrapper'>
    <div className='left'>
    <h1 className='logo'><a href="">Cyndy!.. </a></h1>
    <div className='item-container'>
       <PhoneIcon className='icon'/>
       <span>08097407765</span>
       <MailIcon className='icon'/>
       <span><a href="https://mail.google.com/mail/u/0/#inbox">cynthiachiagu@gmail.com</a></span>

    </div>
    </div>
    <div className='right'></div>
       
    </div>
      
    </div>
  )
}

export default Navbar
