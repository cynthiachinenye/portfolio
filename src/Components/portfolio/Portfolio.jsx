import '../portfolio/portfolio.scss'
import { portfolioFeatured, portfolioWeb, portfolioMobile, designPortfolio, contentPortfolio } from '../../DataList'
import { useEffect, useState } from 'react'
import PortfolioList from '../list/PortfolioList'

function Portfolio() {
  const [list, setList] = useState('featured')
  const [data, setData] = useState([])


  const items = [

    {
      id: 'featured',
      title: 'Featured',
    },

    {
      id: 'web',
      title: 'Web App',
    },

    {
      id: 'mobile',
      title: 'Mobile App',

    },

    {
      id: 'design',
      title: 'Design',
    },

    {
      id: 'content',
      title: 'content',
    }


  ]

  useEffect(() => {
    switch (list) {
      case 'featured':
        setData(portfolioFeatured)
        break;

      case 'web':
        setData(portfolioWeb);
        break;

      case 'mobile':
        setData(portfolioMobile);
        break;

      case 'design':
        setData(designPortfolio);
        break;

      case 'content':
        setData(contentPortfolio);
        break;

      default:
        break;
    }

  }, [list])


  return (
    <div className='portfolio' id='portfolio'>

      <h1>Portfolio</h1>
      <div className='content'>

        <ul>
          {
            items.map((i) => (
              <PortfolioList
                title={i.title}
                active={list === i.id}
                setList={setList}
                id={i.id}
              />


            ))
          }
        </ul>


      </div>

      <div className='container'>
        
       {
        data.map((e)=>(
          <div className='img-items'>
           <img src={e.img} alt=''/>
           <h3>{e.name}</h3>

          </div>

        ))
       }
      </div>



    </div>
  )
}

export default Portfolio
