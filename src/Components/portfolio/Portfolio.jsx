import '../portfolio/portfolio.scss'
import {portfolioFeatured, portfolioWeb, portfolioMobile, designPortfolio, contentPortfolio} from '../../DataList'
import { useState } from 'react'

function Portfolio() {
  const [list, setList] = useState('')


  return (
    <div className='portfolio' id='portfolio'>
     
    <h1>Portfolio</h1>
    <ul>
    
    </ul>


      
    </div>
  )
}

export default Portfolio
