import './app.scss'
import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Portfolio from './Components/portfolio/Portfolio'
import Work from './Components/work/Work';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Intro from './Components/intro/Intro';



function App() {
  const [menuBar, setMenuBar] = useState(false)
  return (
    <div className="app">
     <Navbar menuBar={menuBar} setMenuBar={setMenuBar}/>
     <Menu  menuBar={menuBar}  setMenuBar={setMenuBar}/>
     <div className='sections'>
     <Intro/>
     <Portfolio/>
     <Work/>
     <Testimonial/>
     <Contact/>
     
     </div>
    </div>
  );
}

export default App;
