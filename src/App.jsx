import './app.scss'
import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Portfolio from './Components/portfolio/Portfolio'



function App() {
  const [menuBar, setMenuBar] = useState(false)
  return (
    <div className="app">
     <Navbar menuBar={menuBar} setMenuBar={setMenuBar}/>
     <Menu  menuBar={menuBar}  setMenuBar={setMenuBar}/>
     <div className='sections'>
     <Portfolio/>
     
     </div>
    </div>
  );
}

export default App;
