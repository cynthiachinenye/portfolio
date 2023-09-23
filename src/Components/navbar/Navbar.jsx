import '../navbar/navbar.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


function Navbar({menuBar,setMenuBar}) {
  return (
    // <div className={'nav'  + (menuBar && 'active')}>
    <div className={"nav " + (menuBar && "active")}>

    <div className='wrapper'>
    <div className='left'>
    <h1 className='logo'><a href="">Cyndy!.. </a></h1>
    <div className='item-container'>
       <PhoneIcon className='icon'/>
       <span>08097407765</span>
       </div>
       <div className='item-container'>
       <MailIcon className='icon'/>
       <span><a href="https://mail.google.com/mail/u/0/#inbox">cynthiachiagu@gmail.com</a></span>

    </div>
    </div>
    <div className='right' >
      <div className='menu' onClick={()=>setMenuBar(!menuBar)}>
      <span className='line1'></span>
      <span className='line2'></span>
      <span className='line3'></span>
       
      </div>
    </div>
       
    </div>
      
    </div>
  )
}

export default Navbar
