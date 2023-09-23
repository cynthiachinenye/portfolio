import { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";



function App() {
  const [menuBar, setMenuBar] = useState(false)
  return (
    <div className="App">
     <Navbar menuBar={menuBar} setMenuBar={setMenuBar}/>
     <Menu menuBar={menuBar} setMenuBar={setMenuBar}/>
    </div>
  );
}

export default App;
