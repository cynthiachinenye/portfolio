import '../list/Portifolio.scss'

function PortfolioList({id,active, setList,title}) {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=>setList(id)} >
    {title}
    
    </li>
  )
}

export default PortfolioList
