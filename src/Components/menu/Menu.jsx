import React from 'react'
import './menu.scss'

function Menu({menuBar,setMenuBar}) {
    
  return (
    <div className={'menu'+ (menuBar && 'active')}>
    <ul>
      <li onclick={()=>setMenuBar(false)}>
      <a href="#intro">Home</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='portifolio'>portifolio</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='work'>Work</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='testimonial'>Testimonial</a>
      </li>
      <li onClick ={()=>setMenuBar(false)}>
       <a href='contact'>Contact</a>
      </li>
    </ul>
      
    </div>
  )
}

export default Menu
