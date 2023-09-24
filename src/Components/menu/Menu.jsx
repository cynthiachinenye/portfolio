
import '../menu/menu.scss'

function Menu({ menuBar, setMenuBar }) {
    
  return (
    <div className={"menubar " + (menuBar && "active")}>
    <ul>
      <li onClick={()=>setMenuBar(false)}>
      <a href="#intro">Home</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='#portfolio'>portfolio</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='#work'>Work</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='#testimonial'>Testimonial</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='#contact'>Contact</a>
      </li>
    </ul>
      
    </div>
  )
}

export default Menu
